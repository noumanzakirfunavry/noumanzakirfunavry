import { GetAllDepartmentsRequestDto, GetAllDepartmentsResponseDto } from "@cnbc-monorepo/dtos";
import { Departments } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable, Query } from "@nestjs/common";

@Injectable()
export class DepartmentService{
    
    constructor(
        @Inject("DEPARTMENTS_REPOSITORY")
        private departRepo:typeof Departments
    ){}

    async getAll(query:GetAllDepartmentsRequestDto){
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        let where={}
        if(query.name){
            where['name']=query.name
        }
        const result=await this.departRepo.findAll({where:where,limit:query.limit,offset:offset})
        if(!result.length){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )   
        }
        return new GetAllDepartmentsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }

}