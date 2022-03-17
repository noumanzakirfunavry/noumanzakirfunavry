import { Users } from "@cnbc-monorepo/entity"

export class GetAllAdminsResponseDto{
    statusCode: number
    message: string
    response = {
        admins : Users[''],
        totalCount : 0
    }
    constructor(statusCode: number, message: string, admins: any,total : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.admins = admins,
        this.response.totalCount = total
    }
}