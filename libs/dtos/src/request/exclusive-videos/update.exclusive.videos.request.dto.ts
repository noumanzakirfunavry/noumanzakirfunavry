import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, ValidateNested } from "class-validator";
import { CreateExclusiveVideosRequestDto } from "./create.exclusive.videos.request.dto";

export class UpdateExclusiveVideosRequestDto {
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateExclusiveVideosRequestDto)
    exclusiveVideos: CreateExclusiveVideosRequestDto[]

}