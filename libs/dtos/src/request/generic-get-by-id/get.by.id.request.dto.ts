import { IsNotEmpty, IsNumberString } from "class-validator";

export class GetById{
    @IsNotEmpty()
    @IsNumberString()
    id : number
}