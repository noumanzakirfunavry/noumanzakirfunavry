import {
  CreateSubscriberRequestDto,
  CreateSubscriberResponseDto,
  GetSubscriberByIdResponseDto,
  LoginSubscriberRequestDto,
} from '@cnbc-monorepo/dtos';
import { EmailSubscribers } from '@cnbc-monorepo/entity';
import {
  CustomException,
  Exceptions,
  ExceptionType,
} from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UniqueConstraintError } from 'sequelize';

@Injectable()
export class SubscribersService {
  constructor(
    @Inject('EMAIL_SUBSCRIBERS_REPOSITORY')
    private emailSubscriberRepo: typeof EmailSubscribers,
    private helperService: Helper,
    private jwtService: JwtService
  ) {}

  async loginSubscriber(loginSubscriberRequestDto: LoginSubscriberRequestDto) {
    const emailSubscriber = await this.emailSubscriberRepo.findOne({
      where: { email: loginSubscriberRequestDto.email },
      attributes: { include: ['password'] },
      raw: true,
    });

    if (!emailSubscriber) {
      throw new CustomException(
        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].message,
        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].status
      );
    }

    const isPasswordValid = await this.helperService.comparePasswords(
      loginSubscriberRequestDto.password,
      emailSubscriber.password
    );

    if (!isPasswordValid) {
      throw new CustomException(
        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].message,
        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].status
      );
    }

    const payload = {
      subscriber: {
        id: emailSubscriber.id,
        email: emailSubscriber.email,
        name: emailSubscriber.name,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

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

  async getSubscriberById(
    subscriberId: number
  ): Promise<GetSubscriberByIdResponseDto> {
    const emailSubscriber = await this.emailSubscriberRepo.findByPk(
      subscriberId
    );

    if (!emailSubscriber) {
      throw new NotFoundException();
    }

    return new GetSubscriberByIdResponseDto(
      HttpStatus.OK,
      'Request Successful',
      emailSubscriber
    );
  }
}
