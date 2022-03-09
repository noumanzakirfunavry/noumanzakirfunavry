import { AddQuoteResponseDto, GetAllQuotesRequestDto, GetAllQuotesResponseDto, UpdateQuoteRequestDto, UpdateQuoteResponseDto } from "@cnbc-monorepo/dtos";
import { Quotes } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class QuotesService{
    constructor(
        @Inject('QUOTES_REPOSITORY')
        private quotesRepo: typeof Quotes,
    ){}

    async getAll(query:GetAllQuotesRequestDto){
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        let where={}
        if(query.name){
            where['name']=query.name
        }
        const result=await this.quotesRepo.findAll({where:where,offset:offset,limit:query.limit})
        if(!result.length){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )  
        }
        return new GetAllQuotesResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
    async addQuote(body){
        const result=await this.quotesRepo.create(body)
        if(!result){
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
              )  
        }
        return new AddQuoteResponseDto(HttpStatus.OK,"CREATED SUCCESSFULLY",result)
    }
    async updateQuote(body:UpdateQuoteRequestDto){
        const quote=await this.quotesRepo.findOne({where:{id:body.id}})
        if(!quote){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status  
            ) 
        }
        const {id,...rest}=body
        const result=await quote.update(rest)
        return new UpdateQuoteResponseDto(HttpStatus.OK,"UPDATED SUCCESSFULLY", result)  
    }
}