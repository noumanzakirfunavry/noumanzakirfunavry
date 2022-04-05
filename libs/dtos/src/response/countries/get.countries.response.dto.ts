export class GetCountriesResponseDto{

  statusCode: number;
  message: string;
  countries: string[]
  
	constructor(
    statusCode: number,
    message: string,
    countries: string[]
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.countries = countries;
  }
}