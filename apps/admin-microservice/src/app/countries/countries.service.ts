import { GetCountriesResponseDto } from '@cnbc-monorepo/dtos';
import { HttpStatus, Injectable } from '@nestjs/common';
import { getNames } from 'country-list';

@Injectable()
export class CountriesService {

	getAllCountries(): GetCountriesResponseDto {
		return new GetCountriesResponseDto(HttpStatus.OK, 'Request Successful', getNames())
	}
}
