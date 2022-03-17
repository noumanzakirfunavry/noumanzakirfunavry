import { Users } from "@cnbc-monorepo/entity"

export class GetAdminByIdResponseDto{
    statusCode: number
    message: string
    response = {
        admin : Users
    }
    constructor(statusCode: number, message: string, admin: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.admin = admin
    }
}