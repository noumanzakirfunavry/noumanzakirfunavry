import { ChangeTypes, EntityTypes } from "@cnbc-monorepo/enums";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AddLogRequestDto{
    @IsNotEmpty()
    @IsEnum(ChangeTypes)
    changeType : string

    @IsNotEmpty()
    @IsEnum(EntityTypes)
    entityType : string

    @IsNotEmpty()
    @IsNumber()
    entityId : number

    @IsNotEmpty()
    @IsDateString()
    changeDate : string

    @IsNotEmpty()
    @IsString()
    changeComment : string

    @IsOptional()
    location : string

    @IsNotEmpty()
    @IsString()
    ipAddress : string

    @IsNotEmpty()
    @IsNumber()
    sessionsId : number

}