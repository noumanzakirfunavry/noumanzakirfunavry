import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAlexaAudioRequestDto{
        @IsNotEmpty()
        @IsDateString()
        date : string

        @IsNotEmpty()
        @IsDateString()
        timestamp : Date

        @IsNotEmpty()
        @IsString()
        description : Date

        @IsNotEmpty()
        @IsString()
        title : string

        @IsOptional()
        attachmentId : number
}