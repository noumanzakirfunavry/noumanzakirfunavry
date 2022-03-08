import { AddBranchRequestDto, DeleteBranchRequestDto, GetALLBranchesRequestDto, UpdateBranchRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { BranchesService } from "./branches.service";

@Controller("Admin/api/admin/branches")
export class BranchesController{
    constructor(private breanchService:BranchesService){}

    @Get("getById/:id")
    async getById(@Param('id') id:number){
        return await this.breanchService.getById(id)
    }

    @Get("getAll")
    async getAll(@Query() query:GetALLBranchesRequestDto ){
        return await this.breanchService.getAll(query)
    }

    @Post('add')
    async addBranch(@Body() body:AddBranchRequestDto){
        return await this.breanchService.addBranch(body)
    }

    @Delete('delete')
    async delete(@Query() query:DeleteBranchRequestDto){
        return await this.breanchService.delete(query.ids)
    }

    @Put('update')
    async update(@Body() body:UpdateBranchRequestDto){
        return await this.breanchService.update(body)
    }

}