import { EmailSubscribers } from '@cnbc-monorepo/entity';

export class GetSubscriberByIdResponseDto {
  statusCode: number;
  message: string;
  emailSubscriber: Partial<EmailSubscribers>;
  constructor(
    statusCode: number,
    message: string,
    emailSubscriber: Partial<EmailSubscribers>
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.emailSubscriber = emailSubscriber;
  }
}
