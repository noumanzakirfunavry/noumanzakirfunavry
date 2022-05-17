import { IsNotEmpty, IsNumberString } from "class-validator";

export class GetAllSessionsRequestDto{
    @IsNotEmpty()
    @IsNumberString()
    userLimit : number

    @IsNotEmpty()
    @IsNumberString()
    userPageNo : number
    
		@IsNotEmpty()
    @IsNumberString()
    sessionLimit : number
}