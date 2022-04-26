import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  // @Post()
  // create(@Body() createProgramDto: CreateProgramDto) {
  //   return this.programsService.create(createProgramDto);
  // }

  @Get('/getAll')
  findAll() {
    return this.programsService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id', ParseIntPipe) programId: number) {
    return this.programsService.findOne(programId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProgramDto: UpdateProgramDto) {
  //   return this.programsService.update(+id, updateProgramDto);
  // }

  @Delete('/delete/:id')
  remove(@Param('id', ParseIntPipe) programId: number) {
    return this.programsService.remove(programId);
  }
}
