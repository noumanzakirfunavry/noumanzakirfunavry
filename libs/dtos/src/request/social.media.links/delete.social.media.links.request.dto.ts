import {  ArrayNotEmpty, IsArray} from "class-validator"

export class DeleteSocialMediaLinkById{
    @IsArray()
    @ArrayNotEmpty()
    id : []
}