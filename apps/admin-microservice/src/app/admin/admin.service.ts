import { GenericResponseDto, GetAdminByIdResponseDto } from '@cnbc-monorepo/dtos';
import { Users } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof Users,
    ) { }
    async getUserById(id: number): Promise<GetAdminByIdResponseDto> {
        try {
            const user_exists = await this.userExists(id)
            if (user_exists) {
                return new GetAdminByIdResponseDto(
                    HttpStatus.OK,
                    "Admin fetched successfully",
                    user_exists
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                    Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: admin.service.ts ~ line 21 ~ AdminService ~ getUserById ~ err", err)
            throw err
        }
    }
    async userExists(id: number) {
        return await this.usersRepository.findOne({
            where: {
                id: id
            }
        })
    }
}
