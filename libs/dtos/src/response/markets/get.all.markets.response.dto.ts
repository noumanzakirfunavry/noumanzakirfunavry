import { Markets } from '@cnbc-monorepo/entity';

export class GetAllMarketsResponseDto {
  statusCode: number;
  message: string;
  response?: Markets[];
  constructor(statusCode: number, message: string, response?: Markets[]) {
    this.statusCode = statusCode;
    this.message = message;
    if (response) {
      this.response = response;
    }
  }
}
