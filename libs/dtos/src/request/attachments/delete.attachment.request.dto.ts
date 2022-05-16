import { ArrayNotEmpty, IsArray } from "class-validator";

export class DeleteAttachmentRequestDto{
    @IsArray()
    @ArrayNotEmpty()
    id : number[]
}