import { GetAllDepartmentsRequestDto } from "@cnbc-monorepo/dtos";
import { Controller, Get, Query } from "@nestjs/common";
import { DepartmentService } from "./departments.service";

@Controller('admin/api/admin/departments')
export class DepartmentController{
    constructor(private departmentService:DepartmentService){}

    @Get('getAll')
    async getAll(@Query() query:GetAllDepartmentsRequestDto){
        return await this.departmentService.getAll(query)
    }

}