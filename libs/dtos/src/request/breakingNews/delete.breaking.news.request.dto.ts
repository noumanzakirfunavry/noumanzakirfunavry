import { IsArray, IsNotEmpty } from "class-validator";

export class DeleteBreakingNewsRequestDto{
    @IsNotEmpty()
    @IsArray()
    ids:number[]
}