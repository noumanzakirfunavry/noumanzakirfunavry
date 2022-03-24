import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginSubscriberRequestDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
