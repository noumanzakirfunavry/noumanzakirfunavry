import { Alerts } from "@cnbc-monorepo/entity"

export class GetAlertByIdResponseDto{
    statusCode: number
    message: string
    response = {
        alert : Alerts
    }
    constructor(statusCode: number, message: string, alerts: any) {
        this.statusCode = statusCode
        this.message = message
        this.response.alert = alerts
    }
}