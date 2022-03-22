import { GenericResponseDto, RegisterAdminRequestDto, RequestResetPasswordRequestDto, ResetPasswordRequestDto, UpdatePasswordRequestDto, UserLoginDto } from '@cnbc-monorepo/dtos';
import { Rights, Roles, Sessions, Users, UsersHasRights } from '@cnbc-monorepo/entity';
import { ForbiddenException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Helper, sequelize } from '@cnbc-monorepo/utility'
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { MailService } from '@cnbc-monorepo/mail';
@Injectable()
export class AnthenticationService {
    constructor
        (
            @Inject('USERS_REPOSITORY')
            private usersRepository: typeof Users,
            @Inject('USERS_HAS_RIGHTS')
            private usersHasRigths: typeof UsersHasRights,
            private jwtService: JwtService,
            @Inject('SESSIONS_REPOSITORY')
            private sessionRepository: typeof Sessions,
            private helperService: Helper,
            private mailService: MailService
        ) {
    }

    async loginUser(body: UserLoginDto) {
        try {
            const response = await this.usersRepository.findOne({
                include: [Roles, Rights],
                where: {
                    userName: body.userName
                }
            })
            if (response) {
                const compare_passwords = await this.helperService.comparePasswords(body.password, response.password)
                if (compare_passwords) {
                    const session_creation = await this.sessionCreation(body, response)
                    const token = await this.tokenGeneration(response, session_creation)
                    if (session_creation) {
                        return new GenericResponseDto(
                            HttpStatus.OK,
                            "Logged-in Successfully!",
                            token
                        )
                    }
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].message,
                        Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].status
                    )
                }
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].message,
                    Exceptions[ExceptionType.INCORRECT_EMAIL_PASSWORD].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 44 ~ AnthenticationService ~ loginUser ~ err", err)
            throw err
        }
    }

    async tokenGeneration(response, sessionObj) {
        const role = response.roles.title
        const payload = {
            user: this.helperService.userObjectCreator(response),
            rights: this.helperService.extractRights(response.rights),
            roles: [role],
            sessionId: sessionObj.id
        }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async sessionCreation(body: UserLoginDto, response) {
        let session;
        const already_exists = await this.sessionRepository.findOne({
            where: {
                usersId: response.id,
                deviceType: body.deviceType,
                deviceId: body.deviceId
            }
        })
        if (already_exists) {
            return already_exists
        }
        else {
            session = await this.sessionRepository.create({
                startTime: new Date(),
                deviceId: body.deviceId,
                deviceType: body.deviceType,
                usersId: response.id
            })
        }
        return session;
    }

    async getUserInfo(id) {
        return await this.sessionRepository.findOne(id)
    }

    async updatePassword(body: UpdatePasswordRequestDto, user): Promise<GenericResponseDto> {
        try {
            const user_info = await this.usersRepository.findOne({
                where: {
                    id: user.id
                }
            })
            if (await this.helperService.comparePasswords(body.oldPassword, user_info.password)) {
                const new_password = await this.helperService.encryptPassword(body.password)
                const response = this.usersRepository.update(
                    {
                        password: new_password
                    },
                    {
                        where: {
                            id: user.id
                        }
                    }
                )
                if (response) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Password updated successfully!"
                    )
                }
                else {
                    throw new ForbiddenException("Unable to update password")
                }
            }
            else {
                throw new NotFoundException("Incorrect password")
            }
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 128 ~ AnthenticationService ~ updatePassword ~ err", err)
            throw err
        }
    }


    async registerAdmin(roles, body: RegisterAdminRequestDto): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                if (roles === "Admin" && body.rolesId === 3) {
                    throw new CustomException(
                        Exceptions[ExceptionType.ADMIN_CANNOT_ADD_SUPER_ADMIN].message,
                        Exceptions[ExceptionType.ADMIN_CANNOT_ADD_SUPER_ADMIN].status
                    )
                }
                else {
                    // Create User
                    const user_info = await this.addUser(body, transactionHost)
                    if (user_info) {
                        const rights_added = await this.addUserRights(body.rights, user_info, transactionHost)
                        if (rights_added) {
                            return new GenericResponseDto(
                                HttpStatus.OK,
                                "Added Successfully!"
                            )
                        }
                        else {
                            throw new CustomException(
                                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                            )
                        }
                    }
                    else {
                        throw new CustomException(
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                        )
                    }
                }
            });
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 139 ~ AnthenticationService ~ registerAdmin ~ err", err)
            return err
        }
    }

    async updateAdmin(id: number, body: RegisterAdminRequestDto): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                const admin_exists = await this.adminExistsQuery(id)
                if (admin_exists) {
                    const update_user = await this.updateAdminQuery(body, id, transactionHost)
                    if (update_user) {
                        const delete_rights = await this.deleteAdminRightsQuery(id)
                        if (delete_rights) {
                            const rights_added = await this.addUserRights(body.rights, { id: id }, transactionHost)
                            if (rights_added) {
                                return new GenericResponseDto(
                                    HttpStatus.OK,
                                    "Updated Successfully!"
                                )
                            }
                            else {
                                throw new CustomException(
                                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                                )
                            }
                        }
                    }
                    else {
                        throw new CustomException(
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                            Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                        )
                    }
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                    )
                }
            });
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 139 ~ AnthenticationService ~ registerAdmin ~ err", err)
            return err
        }
    }

    private async adminExistsQuery(id: number) {
        return await this.usersRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async deleteAdminRightsQuery(id: number) {
        const response = await this.usersHasRigths.destroy({
            where: {
                usersId: id
            }
        });
        return response === 0 ? true : response
    }

    private async updateAdminQuery(body: RegisterAdminRequestDto, id: number, transactionHost) {
        body.password = await this.helperService.encryptPassword(body.password)
        return await this.usersRepository.update(body, {
            where: {
                id: id
            },
            transaction: transactionHost.transaction
        });
    }

    async addUserRights(rights, user, transactionHost) {
        for (let i = 0; i < rights.length; i++) {
            await this.usersHasRigths.create({
                rightsId: rights[i],
                usersId: user.id
            }, transactionHost)
        }
        return true
    }
    async addUser(body, transactionHost) {
        const userObj = body
        userObj.password = await this.helperService.encryptPassword(userObj.password)
        return await this.usersRepository.create(userObj, transactionHost)
    }
    async requestResetPassword(body: RequestResetPasswordRequestDto): Promise<GenericResponseDto> {
        try {
            const email_exists = await this.emailExists(body.email)
            if (email_exists) {
                const result = await this.mailService.mailTester(body.email)
                if (result) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Email sent successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                        Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                    )
                }
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.EMAIL_NOT_FOUND].message,
                    Exceptions[ExceptionType.EMAIL_NOT_FOUND].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 206 ~ AnthenticationService ~ mailtesting ~ err", err)
            throw err
        }
    }

    async emailExists(email) {
        return await this.usersRepository.findOne({
            where: {
                email: email
            }
        })
    }

    async resetPassword(token, body: ResetPasswordRequestDto): Promise<GenericResponseDto> {
        try {
            const decodedToken = this.jwtService.decode(token)
            if (decodedToken["exp"] > 0) {
                const response = await this.usersRepository.update(
                    {
                        password: await this.helperService.encryptPassword(body.password)
                    },
                    {
                        where: {
                            email: decodedToken['email']
                        }
                    })
                if (response) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Reset password successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                        Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                    )
                }

            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.TIME_EXPIRED].message,
                    Exceptions[ExceptionType.TIME_EXPIRED].status
                )
            }

        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 239 ~ AnthenticationService ~ resetPassword ~ err", err)
            throw err
        }

    }
    async logOut(sessionId): Promise<GenericResponseDto> {
        const response = this.sessionRepository.update({ endTime: new Date() }, {
            where: {
                id: sessionId
            }
        })
        if (response) {
            return new GenericResponseDto(
                HttpStatus.OK,
                "Logged out successfully"
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
            )
        }
    }
}

