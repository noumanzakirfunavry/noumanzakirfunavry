import { IsArray, IsNotEmpty } from "class-validator";

export class DeleteQuickLinkRequestDto{

    @IsNotEmpty()
    @IsArray()
    ids:number[]
}