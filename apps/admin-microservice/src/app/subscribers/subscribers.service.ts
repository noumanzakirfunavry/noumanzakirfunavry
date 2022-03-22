import {
  CreateSubscriberRequestDto,
  CreateSubscriberResponseDto,
} from '@cnbc-monorepo/dtos';
import { EmailSubscribers } from '@cnbc-monorepo/entity';
import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UniqueConstraintError } from 'sequelize';

@Injectable()
export class SubscribersService {
  constructor(
    @Inject('EMAIL_SUBSCRIBERS_REPOSITORY')
    private emailSubscriberRepo: typeof EmailSubscribers
  ) {}

  async addEmailSubscriber(
    CreateSubscriberRequestDto: CreateSubscriberRequestDto
  ): Promise<CreateSubscriberResponseDto> {
    try {
      const response = await this.emailSubscriberRepo.create<EmailSubscribers>({
        ...CreateSubscriberRequestDto,
      });

      // destructure password and return the rest
      const { password, ...emailSubscriber } = response.get();

      return new CreateSubscriberResponseDto(
        HttpStatus.CREATED,
        'Email subscriber created successfully',
        emailSubscriber
      );
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        // error.errors[0].path gets the property name that is throwing unique constraint error
        throw new BadRequestException(`${error.errors[0].path} must be unqiue`);
      } else {
        throw new InternalServerErrorException(JSON.stringify(error.errors));
      }
    }
  }
}
