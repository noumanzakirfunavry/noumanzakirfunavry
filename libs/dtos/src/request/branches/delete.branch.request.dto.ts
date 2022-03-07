import { IsArray, IsNotEmpty } from "class-validator";

export class DeleteBranchRequestDto{
    @IsNotEmpty()
    @IsArray()
    ids:number[]
}