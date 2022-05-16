import { AddCategoriesResponseDto, GenericResponseDto, GetAllCategoriesForClientRequestDto, GetAllCategoriesRequestDto, GetAllCategoriesResponseDto, GetByIdCategoryResponseDto, UpdateCategoriesRequestDto, UpdateCategoriesResponseDto, UpdateOrderCategoriesRequestDto } from "@cnbc-monorepo/dtos";
import { ElkService } from "@cnbc-monorepo/elk";
import { Categories, News } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { Helper, sequelize } from "@cnbc-monorepo/utility";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { parse } from "path";
@Injectable()
export class CategoriesService {
	constructor(
		@Inject('CATEGORIES_REPOSITORY')
		private categoryRepo: typeof Categories,

		@Inject('NEWS_REPOSITORY')
    private newsRepository: typeof News,

				 
		private helperService: Helper
	) { }

	async getById(id: number) {
		const result = await this.categoryRepo.findOne({ where: { id: id }, include: ['user', { model: Categories, as: 'sub', include: ['user'] }], })
		if (!result) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		return new GetByIdCategoryResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
	}

	async getByIdClient(id: number) {
		const result = await this.categoryRepo.findOne({ where: { id: id, isActive: true }, include: [{ model: Categories, as: 'sub' }], })
		if (!result) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		return new GetByIdCategoryResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
	}

	async add(body, userId: number) {
		const result = await this.categoryRepo.create({ ...body, publishedBy: userId })
		if (!result) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		return new AddCategoriesResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
	}
	async delete(id: number) {
		const result = await this.categoryRepo.destroy({ where: { id } })
		if (!result) {
			throw new CustomException(
				Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
				Exceptions[ExceptionType.UNABLE_TO_DELETE].status
			)
		}

		this.deleteCategoriesElk(id)

		return new GenericResponseDto(HttpStatus.OK, "DELETED SUCCESSFULLY")
	}
	async getAllForClient(query: GetAllCategoriesForClientRequestDto) {
		const response = await this.getAllForClientQuery(query)

		response.rows = response.rows.map(item => item.toJSON())

		let categories = response.rows.filter((item) => item.parentCategoryId == null)

		// Removing The Top Level Categories from the original result
		for (let index = 0; index < categories.length; index++) {
			const element = categories[index];
			response.rows = this.removeItemOnce(response.rows, element);
		}
		// Now Calling to fit all remaining categories
		this.makingNested(response.rows, categories, 0)

		return new GenericResponseDto(
			HttpStatus.OK,
			"FETCHED SUCCESSFULLY",
			{
				categories: categories,
				totalCount: response.count
			}
		);

	}
	private async getAllForClientQuery(query: GetAllCategoriesForClientRequestDto) {
		return await this.categoryRepo.findAndCountAll({
			include: ['user'],
			where: {
				isActive: true,
				...(query.displayInHomePage && {
					displayInHomePage: JSON.parse(query.displayInHomePage.toString())
				}),
				...(query.displayInCategoryMenu && {
					displayInCategoryMenu: JSON.parse(query.displayInCategoryMenu.toString())
				})
			},
			limit: parseInt(query.limit.toString()),
			offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
		});
	}

	async getAll(query: GetAllCategoriesRequestDto) {
		let { limit, pageNo, ...where } = query

		let offset = 0
		pageNo = pageNo - 1;
		if (pageNo) offset = limit * pageNo;

		let result = await this.categoryRepo.findAndCountAll(

			{
				include: ['user', {
					model: Categories, as: 'sub', required: false,
					// where: {
					//     ...where,
					// }
				}],
				where: { ...where, parentCategoryId: null },
				limit,
				offset
			}

		)
		if (!result.count) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}


		// ** Recursion has been implemented to populate nested submenus,
		// ** For example, populating main menus with sub menus, with each sub menu having more sub menus etc */ 
		result.rows = result.rows.map(item => item.toJSON())

		// let categories = result.rows.filter((item) => item.parentCategoryId == null)

		// Removing The Top Level Categories from the original result
		// for (let index = 0; index < categories.length; index++) {
		//     const element = categories[index];
		//     result.rows = this.removeItemOnce(result.rows, element);
		// }
		// Now Calling to fit all remaining categories
		// this.makingNested(result.rows, categories, 0)

		return new GenericResponseDto(
			HttpStatus.OK,
			"FETCHED SUCCESSFULLY",
			{
				categories: result.rows,
				totalCount: await this.parentCountQuery()
			}
		);
	}

	async parentCountQuery() {
		return await this.categoryRepo.count({
			where: {
				parentCategoryId: null
			}
		})
	}

	async update(id: number, body: UpdateCategoriesRequestDto) {
		const category = await this.categoryRepo.findOne({ where: { id: id } })
		if (!category) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		const result = (await category.update(body)).toJSON()

		// update category on elk
		ElkService.updateByQuery({
			index: process.env.ELK_INDEX,
			query: {
				match: {
					"categories.id": id
				}
			},
			script: {
				source: `for(int i = 0; i<ctx._source.categories.length; ++i) {if (ctx._source.categories[i].id == ${id}) {ctx._source.categories[i].id = ${result.id};  ctx._source.categories[i].title = '${result.title}'; ctx._source.categories[i].isActive = ${result.isActive};}}`
			}
		})

		return new UpdateCategoriesResponseDto(HttpStatus.OK, "UPDATED SUCCESSFULLY", result)
	}


	async updateOrder(query: UpdateOrderCategoriesRequestDto) {
		const result = await this.categoryRepo.findAll()
		if (!result) {
			throw new CustomException(
				Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
				Exceptions[ExceptionType.RECORD_NOT_FOUND].status
			)
		}
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				for (let i = 0; i < query.ids.length; ++i) {
					const item = query.ids[i];
					const updateRes = await this.updateCategoryPosition(i + 1, item, transactionHost)
					if (!updateRes[0]) {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
						)
					}
				}
				return new GenericResponseDto(
					HttpStatus.OK,
					"Categories updated successfully"
				)
			})
		}
		catch (err) {
			throw err
		}
	}
	async updateCategoryPosition(pos: number, id: number, transactionHost) {
		return await this.categoryRepo.update({ orders: pos }, {
			where: {
				id: id
			},
			transaction: transactionHost.transaction
		})

	}

	makingNested(categoryArray, endResult, i, pid?) {
		if (categoryArray.length == 0) {
			return;
		} else {
			// Finding All SUbcategories of parent Category at index i
			let filteredArray = [];
			if (pid) {
				filteredArray = categoryArray.filter(
					(item) => item?.parentCategoryId == pid
				);
			} else
				filteredArray = categoryArray.filter(
					(item) => item?.parentCategoryId == endResult[i]?.id
				);
			// If We haven't found the parent category then we need to look into the subcategories
			// of parentCategory at index i
			if (filteredArray.length == 0) {
				// Looping over sub categories
				for (let index = 0; index < endResult.length; index++) {
					if (endResult[index].sub == undefined) {
						endResult[index].sub = [];
					}
					// Finding Parent in sub
					//endResult[index].sub
					this.makingNested(categoryArray, endResult[index].sub, 0, endResult[index].id);
				}
			} else {
				// If we have found
				const newarr = JSON.parse(JSON.stringify(filteredArray));
				newarr.map(function (v) {
					delete v.parentCategory;
				});
				if (pid) endResult.push(...filteredArray);
				else endResult[i].sub = filteredArray;
				for (let index = 0; index < filteredArray.length; index++) {
					const element = filteredArray[index];
					categoryArray = this.removeItemOnce(categoryArray, element);
				}
				this.makingNested(categoryArray, endResult, i + 1);
			}
		}
	}
	removeItemOnce(arr, value) {
		var index = arr.findIndex((element) => element.id == value.id);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return arr;
	}

	deleteCategoriesElk(id: number){
		(this.newsRepository.findAll({
			include: [
				{
					model: Categories,
					where: { id },
					through: { attributes: [] },
					paranoid: false
				}
			],
			raw: true
		})).then(res => {
			let bulkUpdateArray = [];

			// construct bulk update array
			res.forEach(news => {
				bulkUpdateArray.push({
					update: {
						_index: process.env.ELK_INDEX,
						_id: news.id,
					}
				},
					{
						script: {
							source: `for (int i = 0; i < ctx._source.categories.length; ++i) {if(ctx._source.categories[i].id == ${id}) {ctx._source.categories[i].deletedAt = '${new Date().toISOString()}';}}`
						}
					})
			})

				ElkService.bulk({ operations: bulkUpdateArray })
        console.log("🚀 ~ file: categories.service.ts ~ line 318 ~ CategoriesService ~ deleteCategoriesElk ~ bulkUpdateArray", bulkUpdateArray)
		})
	}

		async isCategoryTitleUnique(body){
			// check whether the category to be created has a unqiue title or not
			const categories = await this.categoryRepo.findAll();
			return !categories.some(category => category.title.toLowerCase() === body.title.toLowerCase())
		}

}
