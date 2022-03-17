import { Public } from "@cnbc-monorepo/auth-module";
import { GetALLBranchesRequestDto } from "@cnbc-monorepo/dtos";
import { Controller, Get, Query } from "@nestjs/common";
import { BranchesService } from "./branches.service";

@Controller('admin/api/client/branches')
export class BranchesClientController{

    constructor(
        private branchesService:BranchesService
    ){}

    @Public()
    @Get("getAll")
    async getAll(@Query() query:GetALLBranchesRequestDto){
        return await this.branchesService.getAllforClient(query)
    }
    


}