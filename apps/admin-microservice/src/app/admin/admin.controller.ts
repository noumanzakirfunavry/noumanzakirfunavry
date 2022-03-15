import { Rights, Roles } from '@cnbc-monorepo/auth-module';
import { DeletePresentersRequestDto, GenericResponseDto, GetAdminByIdResponseDto, GetAllAdminsRequestDto, GetAllAdminsResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin/api/admin')
export class AdminController {
    constructor(
        private adminService : AdminService
    ){}

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get(":id")
    async getUserById(@Param("id") id : number) : Promise<GetAdminByIdResponseDto>{
        return await this.adminService.getUserById(id)
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Get("getAll")
    async getAllAdmin(@Query() query : GetAllAdminsRequestDto) : Promise<GetAllAdminsResponseDto>{
        return await this.adminService.getAllAdmin(query)
    }

    @Roles(RoleTypes.Admin)
    @Rights(RightsTypes.GET)
    @Delete()
    async deleteAdmins(@Query() query : DeletePresentersRequestDto) : Promise<GenericResponseDto>{
        return await this.adminService.deleteAdmins(query)
    }

}
