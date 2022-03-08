import { GenericResponseDto, RegisterAdminRequestDto, UpdatePasswordRequestDto, UserLoginDto } from '@cnbc-monorepo/dtos';
import { Rights, Roles, Sessions, Users, UsersHasRights } from '@cnbc-monorepo/entity';
import { ForbiddenException, HttpStatus, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Helper, sequelize } from '@cnbc-monorepo/utility'
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
            private helperService: Helper
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
                    throw new NotFoundException()
                }
            }
            else {
                throw new NotFoundException()
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


    async registerAdmin(roles, body: RegisterAdminRequestDto) {
        try {
            await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                if (roles === "Admin" && body.rolesId === 3) {
                    throw new ForbiddenException("Admin cannot add a super admin")
                }
                else {
                    // Create User
                    const user_info = await this.addUser(body, transactionHost)
                    if (user_info) {
                        const rights_added = await this.addUserRights(body.rights, user_info, transactionHost)
                        if (rights_added) {
                            console.log("🚀 ~ file: anthentication.service.ts ~ line 149 ~ AnthenticationService ~ registerAdmin ~ rights_added", rights_added)
                            return new GenericResponseDto(
                                HttpStatus.OK,
                                "Added Successfully!"
                            )
                        }
                        else {
                            throw new InternalServerErrorException("Failed to add admin")
                        }
                    }
                    else {
                        throw new InternalServerErrorException("Failed to add admin")
                    }
                }
            });
        }
        catch (err) {
            console.log("🚀 ~ file: anthentication.service.ts ~ line 139 ~ AnthenticationService ~ registerAdmin ~ err", err)
            return new GenericResponseDto(
                err.status,
                err.message
            )
        }
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
}

