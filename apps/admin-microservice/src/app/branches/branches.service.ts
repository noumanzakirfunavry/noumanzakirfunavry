import { AddBranchResponseDto, GenericResponseDto, GetALLBranchesRequestDto, GetAllBranchResponseDto, GetBranchByIdResponseDto, UpdateBranchRequestDto, UpdateBranchResponseDto } from "@cnbc-monorepo/dtos";
import { Branches } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { Get, HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class BranchesService {
    constructor(
        @Inject('BRANCHES_REPOSITORY')
        private branchRepo: typeof Branches) { }

    async getAll(query: GetALLBranchesRequestDto) {
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset = query.limit * query.pageNo;
        let where = {}
        if (query.status) {
            where['isActive'] = query.status
        }
        if (query.publishers) {
            where['publishedBy'] = query.publishers
        }
        if (query.title) {
            where['title'] = query.title
        }
        const result = await this.branchRepo.findAll({ where: where, limit: query.limit, offset: offset })
        if (!result.length) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetAllBranchResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
    async getById(id) {
        const result = await this.branchRepo.findOne({ where: { id } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetBranchByIdResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
    async addBranch(body) {
        const result = await this.branchRepo.create(body)
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
            )
        }
        return new AddBranchResponseDto(HttpStatus.OK, "ADDED SUCCESSFULLY", result)
    }
    async delete(ids: number[]) {
        const result = await this.branchRepo.destroy({ where: { id: ids } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
            )

        }
        return new GenericResponseDto(HttpStatus.OK, "DELETED SUCCESSFULLY")
    }
    async update(body: UpdateBranchRequestDto) {
        const job = await this.branchRepo.findOne({ where: { id: body.id } })
        if (!job) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        const { id, ...rest } = body
        const result = await job.update(rest)
        return new UpdateBranchResponseDto(HttpStatus.OK, "UPDATED SUCCESSFULLY", result)
    }
}