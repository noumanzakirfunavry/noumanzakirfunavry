import { AddQuickLinksRequestDto, AddQuickLinksResponseDto, DeleteQuickLinkRequestDto, GenericResponseDto, GetAllQuickLinksRequestDto, GetAllQuickLinksResponseDto, GetQuickLinkByIdResponseDto, PaginatedRequestDto, UpdateQuickLinksRequestDto, UpdateQuickLinksResponsDto } from "@cnbc-monorepo/dtos";
import { QuickLinks } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { Helper } from "@cnbc-monorepo/utility";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Op } from "sequelize";

@Injectable()
export class QuickLinksService {
    constructor(
        @Inject('QUICK_LINKS_REPOSITORY')
        private quickLinksRepo: typeof QuickLinks,
        private helperService: Helper
    ) { }

    async getAllQuickLinks(query: GetAllQuickLinksRequestDto) {
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset = query.limit * query.pageNo;
        const result = await this.quickLinksRepo.findAndCountAll(
            {
                // include : ['user'],
                where: {
                    ...(query.search && {
                        title: {
                            [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
                        }
                    }),
                    ...(query.isActive && {
                        visible: JSON.parse(query.isActive.toString())
                    })
                },
                limit: query.limit,
                offset: offset
            })
        if (!result.count) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )

        }
        return new GenericResponseDto(
            HttpStatus.OK,
            "FETCHED SUCCESSFULLY",
            {
                quickLinks : result.rows,
                totalCount : result.count
            })
    }
    async getById(id: number) {
        const result = await this.quickLinksRepo.findOne({ where: { id } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )

        }
        return new GetQuickLinkByIdResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
    async addQuickLinks(body) {
        //TODO need to add new positioning at top feature or position shift feature
        const result = await this.quickLinksRepo.create(body)
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
            )
        }
        return new AddQuickLinksResponseDto(HttpStatus.OK, "CREATED SUCCESSFULLY", result)
    }

    async updateQuickLinks(id: number, body: UpdateQuickLinksRequestDto) {
        const result = await this.quickLinksRepo.update(body, { where: { id } })
        if (!result[0]) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
            )
        }
        const link = await this.quickLinksRepo.findOne({ where: { id } })
        return new UpdateQuickLinksResponsDto(HttpStatus.OK, "UPDATED SUCCESSFULLY", link)
    }


    async deleteByIds(ids: number[]) {
        const result = await this.quickLinksRepo.destroy({ where: { id: ids } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK, "DELETED SUCCESSFULLY")
    }
}