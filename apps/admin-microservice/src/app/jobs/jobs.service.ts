import { AddJobResponseDto, DeleteJobRequestDto, GenericResponseDto, GetAllJobResponseDto, GetALLJobsRequestDto, GetJobByIdResponseDto, UpdateJobRequestDto, UpdateJobResponseDto } from "@cnbc-monorepo/dtos";
import { Jobs } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject } from "@nestjs/common";
export class JobsService {
    constructor(
        @Inject('JOBS_REPOSITORY')
        private jobRepo: typeof Jobs
    ) { }
    async AddJob(body) {
        const result = await this.jobRepo.create(body)
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
            )
        }
        return new AddJobResponseDto(HttpStatus.OK, "ADDED SUCCESSFULLY", result)
    }

    async getAll(query: GetALLJobsRequestDto) {

        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset = query.limit * query.pageNo;
        let where = {}
        if (query.status) {
            where['isActive'] = JSON.parse(query.status.toString())
        }
        if (query.branchId) {
            where['branchId'] = query.branchId
        }
        if (query.publisher) {
            where['publishedBy'] = query.publisher
        }
        if (query.title) {
            where['title'] = query.title
        }
        const result = await this.jobRepo.findAndCountAll({
            include: ['user','branch'],
            where: where, limit: query.limit, offset: offset
        })
        if (!result.count) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", {
            jobs: result.rows,
            totalCount: result.count
        })
    }
    async getById(id: number) {
        const result = await this.jobRepo.findOne({ where: { id: id } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetJobByIdResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
    async update(id: number, body: UpdateJobRequestDto) {
        const job = await this.jobRepo.findOne({ where: { id: id } })
        if (!job) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        const result = await job.update(body)
        return new UpdateJobResponseDto(HttpStatus.OK, "UPDATED SUCCESSFULLY", result)
    }
    async delete(query: DeleteJobRequestDto) {
        const result = await this.jobRepo.destroy({ where: { id: query.ids } })
        if (!result) {
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK, "DELETED SUCCESSFULLY")
    }

    async getAllforClient(query) {
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset = query.limit * query.pageNo;
        let where = {}
        where['isActive'] = true
        if (query.branchId) {
            where['branchId'] = query.branchId
        }
        if (query.publishers) {
            where['publishedBy'] = query.publishers
        }
        if (query.title) {
            where['title'] = query.title
        }
        const result = await this.jobRepo.findAll({ where: where, limit: query.limit, offset: offset })
        if (!result.length) {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetAllJobResponseDto(HttpStatus.OK, "FETCHED SUCCESSFULLY", result)
    }
}