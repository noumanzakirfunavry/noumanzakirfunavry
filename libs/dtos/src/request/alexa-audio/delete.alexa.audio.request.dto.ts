import { ArrayNotEmpty, IsArray } from "class-validator";

export class DeleteAlexaAudioRequestDto{
    @IsArray()
    @ArrayNotEmpty()
    id : []
}