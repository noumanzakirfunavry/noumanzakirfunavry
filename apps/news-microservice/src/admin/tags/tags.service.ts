import { AddTagResponseDto, DeleteTagByIdResponseDto, GenericResponseDto, GetAllTagsRequestDto, GetAllTagsResponseDto, GetTagsByIdResponseDto, UpdateTagRequestDto, UpdateTagResponseDto } from "@cnbc-monorepo/dtos";
import { Tags } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { Helper } from "@cnbc-monorepo/utility";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Op } from 'sequelize';

@Injectable()
export class TagsService {
    constructor(
        @Inject('TAGS_REPOSITORY')
        private tagsRepo: typeof Tags,
        private helperService: Helper
    ) { }

    async getTags(query: GetAllTagsRequestDto) {
        const result = await this.tagsRepo.findAndCountAll({
            include: ['user'],
            where:{ 
                ...(query.title && {
                title: {
                    [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.title)}%`
                }
                }),
                ...(query.status&& {
                    isActive: JSON.parse(query.status.toString())
                }),
                ...(query.publisher &&
                {
                    publishedBy: query.publisher
                })
            },
            limit: parseInt(query.limit.toString()),
            offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
        })
        if (!result.count) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", {
            tags: result.rows,
            totalCount: result.count
        })
    }
    async getTagById(id: number) {
        const result = await this.tagsRepo.findOne({ where: { id } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetTagsByIdResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
    async deleteTag(ids: number[]) {
        const result = await this.tagsRepo.destroy({ where: { id: ids } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
            )
        }
        return new DeleteTagByIdResponseDto(HttpStatus.OK, "DELETED SUCCESSFULLY")
    }

    async addTag(body: any, userId: number) {
        const result = await this.tagsRepo.create({...body,publishedBy : userId})
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
            )
        }
        return new AddTagResponseDto(HttpStatus.OK, "ADDED SUCCESSFULLY", result)
    }
    async updateTag(id: number, body: UpdateTagRequestDto) {
        const tag = await this.tagsRepo.findOne({ where: { id: id } })
        if (!tag) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        const result = await tag.update(body)
        return new UpdateTagResponseDto(HttpStatus.OK, "UPDATED SUCCESSFULLY", result)
    }
}