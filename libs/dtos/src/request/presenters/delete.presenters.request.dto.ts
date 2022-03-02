import { ArrayNotEmpty, IsArray } from "class-validator";

export class DeletePresentersRequestDto{
    @IsArray()
    @ArrayNotEmpty()
    id : []
}