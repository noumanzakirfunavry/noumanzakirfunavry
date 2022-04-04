import { DeletePresentersRequestDto, GenericResponseDto, GetAdminByIdResponseDto, GetAllAdminsRequestDto, GetAllAdminsResponseDto } from '@cnbc-monorepo/dtos';
import { Roles, Users } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class AdminService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof Users,
        private helperService: Helper
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
    async getAllAdmin(query: GetAllAdminsRequestDto): Promise<GetAllAdminsResponseDto> {
        const response = await this.getAllAdminsQuery(query)
        if (response) {
            return new GetAllAdminsResponseDto(
                HttpStatus.OK,
                "Admins fetched successfully",
                response.rows,
                response.count
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
            )
        }
    }
    private async getAllAdminsQuery(query: GetAllAdminsRequestDto) {
        return await this.usersRepository.findAndCountAll(
            {
                include : [
                    {
                        model : Roles
                    }
                ],
                where: {
                    ...(query.search && {
                        name: {
                            [Op.like]: `%${query.search}%`
                        }
                    }),
                    ...(query.isActive && {
                        isActive: JSON.parse(query.isActive.toString())
                    })
                },
                limit: parseInt(query.limit.toString()),
                offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
            }
        );
    }
    async deleteAdmins(query: DeletePresentersRequestDto): Promise<GenericResponseDto> {
        try {
            let user_exists;
            let delete_user;
            for (let i = 0; i < query.id.length; i++) {
                user_exists = await this.userExists(query.id[i])
                if (user_exists) {
                    delete_user = await this.deleteUser(delete_user, query, i);
                    if (!delete_user) {
                        throw new CustomException(
                            Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                            Exceptions[ExceptionType.UNABLE_TO_DELETE].status
                        )
                    }
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                    )
                }
            }
            return new GenericResponseDto(
                HttpStatus.OK,
                "Deleted successfully"
            )
        }
        catch (err) {
            console.log("🚀 ~ file: admin.service.ts ~ line 85 ~ AdminService ~ deleteAdmins ~ err", err)
            throw err
        }
    }
    private async deleteUser(delete_user: any, query: DeletePresentersRequestDto, i: number) {
        delete_user = await this.usersRepository.destroy({
            where: {
                id: query.id[i]
            }
        });
        return delete_user;
    }
}
