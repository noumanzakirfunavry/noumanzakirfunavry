import { AddQuoteResponseDto, AddTagResponseDto, GetAllQuotesRequestDto, GetAllQuotesResponseDto, GetAllTagsResponseDto, UpdateQuoteRequestDto, UpdateQuoteResponseDto } from "@cnbc-monorepo/dtos";
import { Quotes } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpCode, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { builtinModules } from "module";

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
        return new GetAllQuotesResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result.map((e:Quotes)=>{return {"name":e.name,"id":e.id} as any}))
    }
  }