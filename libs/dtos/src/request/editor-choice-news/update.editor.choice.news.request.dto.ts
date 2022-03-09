import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export class UpdateEditorChoiceNewsRequestDto {
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => EditorChoiceNews)
    news: EditorChoiceNews[]
}
export class EditorChoiceNews {
    @IsNotEmpty()
    @IsNumber()
    position: number

    @IsNotEmpty()
    @IsNumber()
    newsId: number
}