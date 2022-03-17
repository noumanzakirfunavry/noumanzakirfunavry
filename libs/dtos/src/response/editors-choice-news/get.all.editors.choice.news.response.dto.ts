import { EditorsChoiceNews } from "@cnbc-monorepo/entity"

export class GetAllEditorsChoiceNewsResponseDto{
    statusCode: number
    message: string
    response = {
        editorsChoiceNews : EditorsChoiceNews[""]
    }
    constructor(statusCode: number, message: string, editorsChoiceNews: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.editorsChoiceNews = editorsChoiceNews
    }
}