import { Public } from "@cnbc-monorepo/auth-module";
import { AddBranchRequestDto, DeleteBranchRequestDto, GetALLBranchesRequestDto, UpdateBranchRequestDto } from "@cnbc-monorepo/dtos";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { BranchesService } from "./branches.service";

@Controller("admin/api/admin/branches")
export class BranchesController {
    constructor(private breanchService: BranchesService) { }

    @Public()
    @Get("getById/:id")
    async getById(@Param('id') id: number) {
        return await this.breanchService.getById(id)
    }
    @Public()
    @Get("getAll")
    async getAll(@Query() query: GetALLBranchesRequestDto) {
        return await this.breanchService.getAll(query)
    }

    @Public()
    @Post('add')
    async addBranch(@Body() body: AddBranchRequestDto) {
        return await this.breanchService.addBranch(body)
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