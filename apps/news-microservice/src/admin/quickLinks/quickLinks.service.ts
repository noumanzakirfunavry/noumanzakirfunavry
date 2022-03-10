import { AddQuickLinksRequestDto, AddQuickLinksResponseDto, DeleteQuickLinkRequestDto, GenericResponseDto, GetAllQuickLinksResponseDto, GetQuickLinkByIdResponseDto, PaginatedRequestDto, UpdateQuickLinksRequestDto, UpdateQuickLinksResponsDto } from "@cnbc-monorepo/dtos";
import { QuickLinks } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class QuickLinksService{
    constructor(
        @Inject('QUICK_LINKS_REPOSITORY')
        private quickLinksRepo: typeof QuickLinks,
    ){}

    async getAllQuickLinks(query:PaginatedRequestDto){
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        const result=await this.quickLinksRepo.findAll({limit:query.limit,offset:offset})
        if(!result.length){
            throw new CustomException( 
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
          
        }
        return new GetAllQuickLinksResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
    async getById(id:number){
        const result=await this.quickLinksRepo.findOne({where:{id}})
        if(!result){
            throw new CustomException( 
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
          
        }
        return new GetQuickLinkByIdResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
    async addQuickLinks(body){
        //TODO need to add new positioning at top feature or position shift feature
        const result=await this.quickLinksRepo.create(body)
        if(!result){
            throw new CustomException(   
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                    )
        }
        return new AddQuickLinksResponseDto(HttpStatus.OK,"CREATED SUCCESSFULLY",result)
    }

    async updateQuickLinks(id:number,body:UpdateQuickLinksRequestDto){
        const quote=await this.quickLinksRepo.findOne({where:{id:id}})
        if(!quote){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status  
            ) 
        }
        const result=await quote.update(body)
        return new UpdateQuickLinksResponsDto(HttpStatus.OK,"UPDATED SUCCESSFULLY", result)  
    }
    async deleteByIds(ids:number[]){
        const result=await this.quickLinksRepo.destroy({where:{id:ids}})
        if(!result){
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
              )     
        }
        return new GenericResponseDto(HttpStatus.OK,"DELETED SUCCESSFULLY")
    }
}