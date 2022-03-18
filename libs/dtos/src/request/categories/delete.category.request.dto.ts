import { IsArray, IsNotEmpty } from "class-validator";

export class DeleteCategoryRequestDto{

    @IsNotEmpty()
    @IsArray()
    ids:number[]
}