import { Rights, Roles } from '@cnbc-monorepo/auth-module';
import { GenericResponseDto, GetAdminByIdResponseDto } from '@cnbc-monorepo/dtos';
import { RightsTypes, RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
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

}
