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
        //TODO: need to add current total functionality from siteconfiguration table
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        const result=await this.quickLinksRepo.findAll({offset:offset,limit:query.limit})
        if(!result.length){
            throw new CustomException( 
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
        }
        return new GetAllQuickLinksResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result.map((e:QuickLinks)=>{return {"title":e.title,"url":e.url} as any}))
    }
}