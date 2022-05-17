import { IsNotEmpty, IsNumberString } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetSessionsByUserIdRequestDto extends PaginatedRequestDto{
    @IsNotEmpty()
    @IsNumberString()
		userId: number
}