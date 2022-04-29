import { CreateProgramRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllProgramsRequestDto } from '@cnbc-monorepo/dtos';
import { Attachments, Programs, SeoDetails, Users } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class ProgramsService {
	constructor(
		private helperService: Helper,
		@Inject('PROGRAMS_REPOSITORY')
		private programsRepository: typeof Programs,
		@Inject('SEO_DETAILS_REPOSITORY')
		private seoRepository: typeof SeoDetails
	) {

	}
	async addProgram(body: CreateProgramRequestDto, publisherId: number): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				const add_seo_details = await this.createSeoDetails(body, transactionHost)
				if (add_seo_details) {
					delete body.seoDetails
					const add_program = await this.addProgramQuery(body, publisherId, add_seo_details, transactionHost)
					if (add_program) {
						return new GenericResponseDto(
							HttpStatus.OK,
							"Program created successfully"
						)
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
							Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
						)
					}
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
						Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
					)
				}
			})
		}
		catch (err) {
			console.log("🚀 ~ file: programs.service.ts ~ line 24 ~ ProgramsService ~ addProgram ~ err", err)
			throw err
		}
	}

	async updateProgram(id: number, body: CreateProgramRequestDto): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				const program_exists = await this.findProgramQuery(id)
				if (program_exists) {
					const update_seodetails = await this.updateSeoDetails(body, transactionHost)
					if (update_seodetails) {
						delete body.seoDetails
						const update_program = await this.updateProgramQuery(body, id, transactionHost)
						if (update_program) {
							return new GenericResponseDto(
								HttpStatus.OK,
								"Program updated successfully"
							)
						}
						else {
							throw new CustomException(
								Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
								Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
							)
						}
					}
					else {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
							Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
						)
					}
				}
				else {
					throw new CustomException(
						Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
						Exceptions[ExceptionType.RECORD_NOT_FOUND].status
					)
				}
			})
		}
		catch (err) {
			console.log("🚀 ~ file: programs.service.ts ~ line 58 ~ ProgramsService ~ updateProgram ~ err", err)
			throw err
		}
	}

	async getById(id: number): Promise<GenericResponseDto> {
		try {
			const program_exists = await this.findProgramQuery(id)
			if (program_exists) {
				return new GenericResponseDto(
					HttpStatus.OK,
					"Fetched successfully",
					{
						program: program_exists
					}
				)
			}
			else {
				throw new CustomException(
					Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
					Exceptions[ExceptionType.RECORD_NOT_FOUND].status
				)
			}
		}
		catch (err) {
			console.log("🚀 ~ file: programs.service.ts ~ line 102 ~ ProgramsService ~ getById ~ err", err)
			throw err
		}
	}

	async getAllPrograms(query: GetAllProgramsRequestDto): Promise<GenericResponseDto> {
		try {
			const findAllPrograms = await this.programsRepository.findAndCountAll({
				where: {
					...(query.search && {
						title: {
							[Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
						}
					}),
					...(query.isActive && {
						isActive: JSON.parse(query.isActive.toString())
					}),
					...(query.publisherId && {
						publisherId: query.publisherId
					})
				},
				limit: parseInt(query.limit.toString()),
				offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
			})
			return new GenericResponseDto(
				HttpStatus.OK,
				"Fetched successfully",
				{
					program: findAllPrograms.rows,
					totalCount: findAllPrograms.count
				}
			)
		}
		catch (err) {
			console.log("🚀 ~ file: programs.service.ts ~ line 127 ~ ProgramsService ~ getAllPrograms ~ err", err)
			throw err
		}
	}

	async deletePrograms(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
		try {
			return await sequelize.transaction(async t => {
				const transactionHost = { transaction: t };
				for (let i = 0; i < query.id.length; i++) {
					const delete_program = await this.deleteProgram(query.id[i], transactionHost)
					if (!delete_program) {
						throw new CustomException(
							Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
							Exceptions[ExceptionType.UNABLE_TO_DELETE].status
						)
					}
				}
				return new GenericResponseDto(
					HttpStatus.OK,
					"Deleted successfully",
				)

			})
		}
		catch (err) {
			console.log("🚀 ~ file: programs.service.ts ~ line 162 ~ ProgramsService ~ deletePrograms ~ err", err)
			throw err
		}
	}

	private async deleteProgram(id, transactionHost) {
		const delete_program = await this.programsRepository.destroy({
			where: {
				id: id
			},
			transaction: transactionHost.transaction
		});
		return delete_program === 0 ? true : delete_program
	}

	private async updateProgramQuery(body: CreateProgramRequestDto, id: number, transactionHost) {
		return await this.programsRepository.update({ ...body }, {
			where: {
				id: id
			},
			transaction: transactionHost.transaction
		});
	}

	private async updateSeoDetails(body: CreateProgramRequestDto, transactionHost) {
		return await this.seoRepository.update(body.seoDetails, {
			where: {
				id: body.seoDetails.id
			},
			transaction: transactionHost.transaction
		});
	}

	private async findProgramQuery(id) {
		return await this.programsRepository.findOne(
			{
				include: [
					{
						model: Users
					},
					{
						model: SeoDetails
					},
					{
						model: Attachments,
						as: 'thumbnail'
					},
					{
						model: Attachments,
						as: 'promo'
					}
				],
				where: {
					id: id
				}
			}
		);
	}

	private async addProgramQuery(body: CreateProgramRequestDto, publisherId: number, add_seo_details: SeoDetails, transactionHost) {
		return await this.programsRepository.create(this.helperService.programObjectCreator(body, add_seo_details.id, publisherId), {
			transaction: transactionHost.transaction
		});
	}

	private async createSeoDetails(body: CreateProgramRequestDto, transactionHost) {
		return await this.seoRepository.create({ ...body.seoDetails }, {
			transaction: transactionHost.transaction
		});
	}
}
