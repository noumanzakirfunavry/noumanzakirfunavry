import { AddCategoriesRequestDto, GetAllCategoriesRequestDto, GetByIdCategoryResponseDto, UpdateCategoriesRequeustDto } from "@cnbc-monorepo/dtos";
import { Categories } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CategoriesService{
    constructor(
        @Inject('')
        private categoryRepo:typeof Categories
    ){}

    async getById(id:number){
        const result=await this.categoryRepo.findOne({where:{id:id}})
        if (!result){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
        return new GetByIdCategoryResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
 
    async add(body:AddCategoriesRequestDto){
        
    }
    async getAll(body:GetAllCategoriesRequestDto){}

    async update(body:UpdateCategoriesRequeustDto){}


    async updateOrder(){}

}