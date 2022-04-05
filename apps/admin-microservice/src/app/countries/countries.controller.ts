import { Public } from '@cnbc-monorepo/auth-module';
import { GetCountriesResponseDto } from '@cnbc-monorepo/dtos';
import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('admin/api/client/countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

	@Public()
	@Get()
	getAllCountries(): GetCountriesResponseDto {
		return this.countriesService.getAllCountries();
	}
}
