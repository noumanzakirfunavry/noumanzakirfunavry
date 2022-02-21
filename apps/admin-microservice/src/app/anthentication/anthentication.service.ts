import { GenericResponseDto, UserLoginDto } from '@cnbc-monorepo/dtos';
import { Users } from '@cnbc-monorepo/entity';
import { RightsTypes } from '@cnbc-monorepo/enums';
import { HttpCode, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AnthenticationService{
    constructor
        (
            @Inject('USERS_REPOSITORY')
            private usersRepository: typeof Users,
            private jwtService : JwtService
        ) {
         }

    async loginUser(body: UserLoginDto) {
        try {
            const response = await this.usersRepository.findOne({
                where: {
                    userName: body.userName
                }
            })
            if(response){
                const compare_passwords = await bcrypt.compare(body.password,response.password)
                if(compare_passwords){
                    const token =  await this.tokenGeneration(response)
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Logged-in Successfully!",
                        token
                    )
                }
            }
        }
        catch (err) {
            throw new UnauthorizedException(body)
        }
        finally {

        }
    }

    async encryptPassword(password: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }

    async tokenGeneration(response){
        const payload = {
            user : response,
            rights : [RightsTypes.CREATE,RightsTypes.UPDATE]
        }
        return {
            access_token : this.jwtService.sign(payload)
        }
    }
}
