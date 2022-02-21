import { Controller } from "@nestjs/common";
import { TagsService } from "./tags.service";

@Controller("News/api/client/tags")
export class TagsController{

    constructor(
        private tagsService:TagsService
    ){}
    
}