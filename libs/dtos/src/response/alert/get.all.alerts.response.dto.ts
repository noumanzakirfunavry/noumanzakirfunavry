import { Alerts } from "@cnbc-monorepo/entity"

export class GetAllAlertsResponseDto{
    statusCode: number
    message: string
    response = {
        alerts : Alerts[""],
        totalCount : 0
    }
    constructor(statusCode: number, message: string, alerts: any,totalCount : number) {
        this.statusCode = statusCode
        this.message = message
        this.response.alerts = alerts,
        this.response.totalCount = totalCount
    }
}