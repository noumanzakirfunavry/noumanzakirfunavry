import { AddTagResponseDto, DeleteTagByIdResponseDto, GetAllTagsRequestDto, GetAllTagsResponseDto, GetTagsByIdResponseDto, UpdateTagRequestDto, UpdateTagResponseDto } from "@cnbc-monorepo/dtos";
import { Tags } from "@cnbc-monorepo/entity";
import { CustomException, Exceptions, ExceptionType } from "@cnbc-monorepo/exception-handling";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class TagsService{
    constructor(
        @Inject('TAGS_REPOSITORY')
        private tagsRepo: typeof Tags,
    ){}

    async getTags(query:GetAllTagsRequestDto){  
        let offset = 0
        query.pageNo = query.pageNo - 1;
        if (query.pageNo) offset =query.limit * query.pageNo;
        let where={}
        if(query.publishers){
            where['publishedBy']=query.publishers
        }
        if(query.status){
            where['isActive']=query.status
        }
        if(query.title){
            where['title']=query.title
        }
        const result= await this.tagsRepo.findAll({where:where,offset:offset,limit:query.limit})
        if(!result.length){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )  
        }
        return new GetAllTagsResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
    async getTagById(id:number){
        const result=await this.tagsRepo.findOne({where:{id}})
        if(!result){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )     
        }
        return new GetTagsByIdResponseDto(HttpStatus.OK,"FETCHED SUCCESSFULLY",result)
    }
    async deleteTag(id:number){
        const result=await this.tagsRepo.destroy({where:{id}})
        if(!result){
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                Exceptions[ExceptionType.UNABLE_TO_DELETE].status
              )     
        }
        return new DeleteTagByIdResponseDto(HttpStatus.OK,"DELETED SUCCESSFULLY")        
    }

    async addTag(body:any){
        const result=await this.tagsRepo.create(body)
        if(!result){
            throw new CustomException(
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
              )   
        }   
        return new AddTagResponseDto(HttpStatus.OK,"ADDED SUCCESSFULLY",result)
    }
    async updateTag(body:UpdateTagRequestDto){
        const tag=await this.tagsRepo.findOne({where:{id:body.id}})
        if(!tag){
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
              )  
        }
        const {id,...rest}=body
        const result=await tag.update(rest)
        return new UpdateTagResponseDto(HttpStatus.OK,"UPDATED SUCCESSFULLY", result)    
    }
}