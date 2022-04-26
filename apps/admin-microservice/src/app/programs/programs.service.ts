import { GenericResponseDto } from '@cnbc-monorepo/dtos';
import { Programs } from '@cnbc-monorepo/entity';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProgramsService {
	constructor(
		@Inject('PROGRAMS_REPOSITORY')
		private programsRepository: typeof Programs,
	) {

	}
	// create(createProgramDto: CreateProgramDto) {
	// 	return 'This action adds a new program';
	// }

	async findAll(): Promise<GenericResponseDto> {
		const programs = await this.programsRepository.findAll();
		if (!programs) {
			return new GenericResponseDto(HttpStatus.NOT_FOUND, "No programs found")
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request successful', programs)
	}

	async findOne(id: number) {
		const program = await this.programsRepository.findOne({ where: { id } });

		if (!program) {
			return new GenericResponseDto(HttpStatus.NOT_FOUND, "Program not found")
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request successful', program)
	}

	// update(id: number, updateProgramDto: UpdateProgramDto) {
	// 	return `This action updates a #${id} program`;
	// }

	async remove(id: number) {
		const deleteResult = await this.programsRepository.destroy({ where: { id } });

		if (!deleteResult) {
			return new GenericResponseDto(HttpStatus.NOT_FOUND, 'Program not found')
		}

		return new GenericResponseDto(HttpStatus.OK, 'Program deleted successfully')
	}
}
