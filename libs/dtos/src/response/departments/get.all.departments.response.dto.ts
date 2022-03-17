import { Departments } from "@cnbc-monorepo/entity"

export class GetAllDepartmentsResponseDto{

    statusCode:number
    message:string
    response:{department:Departments[]}
    constructor(statusCode:number,message:string,department:Departments[]){
        this.statusCode=statusCode
        this.message=message
        this.response={department}
    }
}