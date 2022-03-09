import { AddBreakingNewsRequestDto, AddBreakingNewsResponseDto } from "@cnbc-monorepo/dtos";
import { BreakingNews } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class BreakingNewsService{
    constructor(
        @Inject("BREAKING_NEWS_REPOSITORY")
        private breakingNewsRepo:typeof BreakingNews
    ){}

    async create(body){
        const result=await this.breakingNewsRepo.create(body)
        if(!result){
            throw new CustomException(
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                    )
        }
        return new AddBreakingNewsResponseDto(HttpStatus.OK,"ADDED SUCCESSFULLY",result)
    }

    
}