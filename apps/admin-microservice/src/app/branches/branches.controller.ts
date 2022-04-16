import { JwtAuthGuard, Public, Rights, Roles } from "@cnbc-monorepo/auth-module";
import { AddBranchRequestDto, DeleteBranchRequestDto, GetALLBranchesRequestDto, UpdateBranchRequestDto } from "@cnbc-monorepo/dtos";
import { RightsTypes, RoleTypes } from "@cnbc-monorepo/enums";
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { BranchesService } from "./branches.service";

@Controller("admin/api/admin/branches")
export class BranchesController {
    constructor(private breanchService: BranchesService) { }

    @Public()
    @Get("getById/:id")
    async getById(@Param('id') id: number) {
        return await this.breanchService.getById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Get("getAll")
    async getAll(@Query() query: GetALLBranchesRequestDto) {
        return await this.breanchService.getAll(query)
    }

    @UseGuards(JwtAuthGuard)
    @Roles(RoleTypes.Admin)
    @Post('add')
    async addBranch(@Req() req,@Body() body: AddBranchRequestDto) {
        return await this.breanchService.addBranch(body,req.user.data.id)
    }

    @Public()
    @Delete('delete')
    async delete(@Query() query: DeleteBranchRequestDto) {
        return await this.breanchService.delete(query.ids)
    }

    @Public()
    @Put('update/:id')
    async update(@Param("id") id:number,@Body() body:UpdateBranchRequestDto){
        return await this.breanchService.update(id,body)
    }

}