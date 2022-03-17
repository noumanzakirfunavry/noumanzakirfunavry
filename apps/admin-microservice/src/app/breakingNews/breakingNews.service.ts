import { AddBreakingNewsRequestDto, AddBreakingNewsResponseDto, GenericResponseDto, GetAllBreakingNewsRequestDto, GetAllBreakingNewsResponseDto, GetByIdBreakingNewsResponseDto, UpdateBreakingNewsRequestDto, UpdateBreakingNewsResponseDto } from "@cnbc-monorepo/dtos";
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

    async update(id:number,body:UpdateBreakingNewsRequestDto){
        const news=await this.breakingNewsRepo.findOne({where:{id}})
        if(!news){
            throw new CustomException(
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
            }
            const result=await news.update(body)
            return new UpdateBreakingNewsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)

    }   
    async delete(ids:number[]){
        const result=await this.breakingNewsRepo.destroy({where:{id:ids}})
        if (!result){
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
            )
        }
        return new GenericResponseDto(HttpStatus.OK,"DELETED SUCCESSFULLY")
    }

    async getAll(query:GetAllBreakingNewsRequestDto){
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        let where={}
        if(query.title){
            where['title']=query.title
        }
        if (query.publishers){
            where['addedBy']=query.publishers
        }
        if (query.status){
            where['isActive']=query.status
        }
        const result=await this.breakingNewsRepo.findAll({where:where,limit:query.limit,offset:offset})
        if(!result.length){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )   
        }
        return new GetAllBreakingNewsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }

    async getById(id:number){
        const result=await this.breakingNewsRepo.findOne({where:{id}})
        if (!result){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )    
        }
        return new GetByIdBreakingNewsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)

    }

    async getAllForClient(query:GetAllBreakingNewsRequestDto){
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        let where={}
        where['isActive']=true
        if(query.title){
            where['title']=query.title
        }
        if (query.publishers){
            where['addedBy']=query.publishers
        }
        const result=await this.breakingNewsRepo.findAll({where:where,limit:query.limit,offset:offset})
        if(!result.length){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )   
        }
        return new GetAllBreakingNewsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
}

