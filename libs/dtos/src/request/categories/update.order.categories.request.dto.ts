import { IsArray, IsNotEmpty } from "class-validator";

export class UpdateOrderCategoriesRequestDto{

    @IsNotEmpty()
    @IsArray()
    ids:number[] 
}
