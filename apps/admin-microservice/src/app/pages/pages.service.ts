import { Pages } from '@cnbc-monorepo/entity';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePageRequestDto, CreatePageResponseDto, DeletePageResponseDto, GenericResponseDto, GetAllPagesResponseDto, GetPageResponseDto, UpdatePageRequestDto, UpdatePageResponseDto } from '@cnbc-monorepo/dtos';

@Injectable()
export class PagesService {
	constructor(@Inject('PAGES_REPOSITORY') private pagesRepository: typeof Pages) { }

	async create(createPageRequestDto: CreatePageRequestDto): Promise<CreatePageResponseDto> {
		const page = await this.pagesRepository.create({ ...createPageRequestDto });
		return new CreatePageResponseDto(HttpStatus.CREATED, "Page created successfully", page);
	}

	async findAll(): Promise<GetAllPagesResponseDto> {
		const pages = await this.pagesRepository.findAll();

		if (!pages) {
			return new GetAllPagesResponseDto(HttpStatus.NOT_FOUND, 'Pages not found');
		}

		return new GetAllPagesResponseDto(HttpStatus.OK, 'Request successful', pages);
	}

	async findOne(id: number): Promise<GetPageResponseDto> {
		const page = await this.pagesRepository.findOne({ where: { id } });

		if (!page) {
			return new GetPageResponseDto(HttpStatus.NOT_FOUND, 'Page was not found');
		}

		return new GetPageResponseDto(HttpStatus.OK, 'Request successful', page);
	}

	async update(id: number, updatePageRequestDto: UpdatePageRequestDto): Promise<UpdatePageResponseDto> {
		const updateResult = await this.pagesRepository.update(updatePageRequestDto, { where: { id } });

		if (!updateResult[0]) {
			return new UpdatePageResponseDto(HttpStatus.NOT_FOUND, 'Page not found');
		}

		return new UpdatePageResponseDto(HttpStatus.OK, 'Page updated successfully');
	}

	async delete(id: number): Promise<DeletePageResponseDto> {
		const deleteResult = await this.pagesRepository.destroy({ where: { id } });

		if (!deleteResult) {
			return new DeletePageResponseDto(HttpStatus.NOT_FOUND, 'Page not found');
		}

		return new DeletePageResponseDto(HttpStatus.OK, 'Page deleted successfully');
	}

	async getAllClient() {
		const pages = await this.pagesRepository.findAll({ where: { isActive: true } });

		if (!pages) {
			return new GenericResponseDto(HttpStatus.NOT_FOUND, 'Pages not found');
		}

		return new GenericResponseDto(HttpStatus.OK, 'Request successful', pages);
	}
}
