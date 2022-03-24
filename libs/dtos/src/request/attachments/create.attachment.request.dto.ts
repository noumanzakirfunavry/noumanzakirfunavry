import { AttachmentTypes } from "@cnbc-monorepo/enums";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAttachmentRequestDto{
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsEnum(AttachmentTypes)
    attachmentType : string 

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    dailyMotionURL : string 
}