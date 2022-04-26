import { JwtAuthGuard, Roles } from '@cnbc-monorepo/auth-module';
import { CreateProgramRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAllProgramsRequestDto } from '@cnbc-monorepo/dtos';
import { RoleTypes } from '@cnbc-monorepo/enums';
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Req, Put, Query } from '@nestjs/common';
import { ProgramsService } from './programs.service';

@Controller('admin/api/admin/programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) { }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseGuards(JwtAuthGuard)
  @Post()
  async addProgram(@Req() req, @Body() createProgramDto: CreateProgramRequestDto): Promise<GenericResponseDto> {
    return  await this.programsService.addProgram(createProgramDto, req.user.data.id);
  }


  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateProgram(@Param('id') id: number, @Body() body: CreateProgramRequestDto): Promise<GenericResponseDto> {
    return await this.programsService.updateProgram(id, body);
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseGuards(JwtAuthGuard)
  @Get('/getById/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<GenericResponseDto> {
    return await this.programsService.getById(id);
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseGuards(JwtAuthGuard)
  @Get('/getAll')
  async getAllPrograms(@Query() query: GetAllProgramsRequestDto): Promise<GenericResponseDto> {
    return await this.programsService.getAllPrograms(query);
  }

  @Roles(RoleTypes.Admin, RoleTypes.Super_Admin)
  @UseGuards(JwtAuthGuard)
  @Delete()
  async deletePrograms(@Query() query :  DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
    return  await this.programsService.deletePrograms(query);
  }
}
