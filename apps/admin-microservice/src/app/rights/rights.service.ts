import { GenericResponseDto, RightsResponseDto, UpdateUserRightsRequestDto } from '@cnbc-monorepo/dtos';
import { Rights, UsersHasRights } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RightsService {
    constructor(
        @Inject('RIGHTS_REPOSITORY')
        private rightsRepository: typeof Rights,
        @Inject('USERS_HAS_RIGHTS')
        private userHasRightsRepository: typeof UsersHasRights
    ) {

    }
    async getAllRights(): Promise<RightsResponseDto> {
        const response = await this.rightsRepository.findAll()
        if (response) {
            return new RightsResponseDto(
                HttpStatus.OK,
                "Rights Fetched Successfully",
                response
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
            )
        }
    }
    async updateUserRights(body: UpdateUserRightsRequestDto, userId: number): Promise<GenericResponseDto> {
        try {
            let response;
            const delete_previous_rights = await this.deleteUserRights(userId);
            if (delete_previous_rights) {
                for (let i = 0; i < body.rights.length; i++) {
                    response = await this.userHasRightsRepository.create(
                        {
                            usersId: userId,
                            rightsId: body.rights[i]
                        })
                    if (!response) {
                        throw new CustomException(
                            Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                            Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                        )
                    }
                }
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "User rights updated successfully"
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                    Exceptions[ExceptionType.UNABLE_TO_DELETE].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: rights.service.ts ~ line 35 ~ RightsService ~ updateUserRights ~ err", err)
            throw err
        }
    }
    async deleteUserRights(usersId) {
        const deleted = await this.userHasRightsRepository.destroy({
            where: {
                usersId: usersId
            }
        })
        return deleted === 0 ? true : deleted
    }
}
