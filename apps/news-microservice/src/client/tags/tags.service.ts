import { GenericResponseDto, GetAllTagsRequestDto, GetAllTagsResponseDto } from "@cnbc-monorepo/dtos";
import { Tags } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TagsService {

    constructor(
        @Inject('TAGS_REPOSITORY')
        private tagsRepo: typeof Tags) { }

    async getTags(query: GetAllTagsRequestDto) {
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset = query.limit * query.pageNo;
        let where = {}
        if (query.publishers) {
            where['publishedBy'] = query.publishers
        }
        if (query.status) {
            where['isActive'] = query.status
        }
        if (query.title) {
            where['title'] = query.title
        }
        const result = await this.tagsRepo.findAndCountAll({ where: {...where, isActive: true }, offset: offset, limit: query.limit })
        if (!result.count) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", {
            tags: result.rows.map((e: Tags) => { return { "title": e.title, "id": e.id } as any }),
            totalCount: result.count
        })
    }
}