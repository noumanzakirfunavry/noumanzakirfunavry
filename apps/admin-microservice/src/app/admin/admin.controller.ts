import { Rights, Roles } from '@cnbc-monorepo/auth-module';
import { DeletePresentersRequestDto, GenericResponseDto, GetAdminByIdResponseDto, GetAllAdminsRequestDto, GetAllAdminsResponseDto, GetAllSessionsRequestDto, GetSessionsByUserIdRequestDto, PaginatedRequestDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Delete, Get, Param, Query, Req } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin/api/admin')
export class AdminController {
    constructor(
        private adminService : AdminService
    ){}

    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get("getAll")
    async getAllAdmin(@Query() query : GetAllAdminsRequestDto) : Promise<GetAllAdminsResponseDto>{
        return await this.adminService.getAllAdmin(query)
    }

		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get('/sessions')
    async getAllSessions(@Query() getAllSessionsDto: GetAllSessionsRequestDto) : Promise<GenericResponseDto>{
        return await this.adminService.getAllSessions(getAllSessionsDto)
    }
		@Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get('/sessionsByUserId')
    async getSessionsByUserId(@Query() getSessionsDto: GetSessionsByUserIdRequestDto) : Promise<GenericResponseDto>{
        return await this.adminService.getSessionsByUserId(getSessionsDto)
    }
    
    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Get(":id")
    async getUserById(@Param("id") id : number) : Promise<GetAdminByIdResponseDto>{
        return await this.adminService.getUserById(id)
    }

    @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
    @Delete()
    async deleteAdmins(@Query() query : DeletePresentersRequestDto, @Req() req) : Promise<GenericResponseDto>{
        return await this.adminService.deleteAdmins(query, req.user.data.id)
    }

}
