import { ContentTypes } from "@cnbc-monorepo/enums";
import { IsEnum, IsOptional } from "class-validator";
import { PaginatedRequestDto } from "../pagination.request.dto";

export class GetMostReadNewsDto extends PaginatedRequestDto {
	@IsOptional()
	@IsEnum(ContentTypes)
	contentType: ContentTypes
}