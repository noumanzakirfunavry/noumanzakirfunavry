import { IsNotEmpty, IsNumber } from "class-validator";
import { AddQuickLinksRequestDto } from "./add.quick.links.request.dto";

export class UpdateQuickLinksRequestDto extends AddQuickLinksRequestDto{
    
    @IsNotEmpty()
    @IsNumber()
    id:number
}