import { CreatePresentersRequestDto, DeletePresentersRequestDto, GenericResponseDto, GetAllPresentersRequestDto, GetAllPresentersResponseDto, GetPresentersByIdResponseDto } from '@cnbc-monorepo/dtos';
import { Presenters } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Fn } from 'sequelize/types/utils';

@Injectable()
export class PresentersService {
    constructor(
        @Inject('PRESENTERS_REPOSITORY')
        private presentersRepository: typeof Presenters,
        private helperService: Helper
    ) { }
    async addPresenter(body: any, req): Promise<GenericResponseDto> {
        try {
            const presenters_body = {
                ...body,
                "publishedBy": req.user.data.id
            }
            const response = await this.presentersRepository.create(presenters_body)
            if (response) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Presenter created successfully"
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: presenters.service.ts ~ line 30 ~ PresentersService ~ addPresenter ~ err", err)
            throw err
        }
    }
    async updatePresenter(body: any, id): Promise<GenericResponseDto> {
        try {
            const presenter_exists = await this.presenterExists(id)
            if (presenter_exists) {
                const update_presenter = await this.presentersRepository.update(body, {
                    where: {
                        id: id
                    }
                })
                if (update_presenter) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Updated successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
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
        catch (err) {
            console.log("🚀 ~ file: presenters.service.ts ~ line 43 ~ PresentersService ~ updatePresenter ~ err", err)
            throw err
        }
    }
    async presenterExists(id: number) {
        return await this.presentersRepository.findOne({
            where: {
                id: id
            }
        })
    }
    async getPresenterById(id: number): Promise<GetPresentersByIdResponseDto> {
        try {
            const presenter_exists = await this.presenterExists(id)
            if (presenter_exists) {
                return new GetPresentersByIdResponseDto(
                    HttpStatus.OK,
                    "Fetched successfully",
                    presenter_exists
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
            console.log("🚀 ~ file: presenters.service.ts ~ line 84 ~ PresentersService ~ getPresenterById ~ err", err)
            throw err
        }
    }
    async getAllPresenters(query: GetAllPresentersRequestDto): Promise<GetAllPresentersResponseDto> {
        try {
            const response = await this.presentersRepository.findAndCountAll({
                where: {
                    name: {
                        [Op.like]: `%${query.search ? query.search : ""}%`
                    },
                    ...(query.isActive && {
                        isActive: JSON.parse(query.isActive.toString())
                    }),
                    ...(query.publisher && {
                        publishedBy: query.publisher
                    })
                },
                limit: parseInt(query.limit.toString()),
                offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
            })
            if (response) {
                return new GetAllPresentersResponseDto(
                    HttpStatus.OK,
                    "Presenters fetched successfully",
                    response.rows,
                    response.count
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: presenters.service.ts ~ line 107 ~ PresentersService ~ getAllPresenters ~ err", err)
            throw err
        }
    }
    async deletePresenterById(query: DeletePresentersRequestDto): Promise<GenericResponseDto> {
        try {
            let presenter_exists;
            let delete_presenter;
            for (let i = 0; i < query.id.length; i++) {
                presenter_exists = await this.presenterExists(query.id[i])
                if (!presenter_exists) {
                    throw new CustomException(
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                        Exceptions[ExceptionType.RECORD_NOT_FOUND].status
                    )
                }
                else {
                    delete_presenter = await this.presentersRepository.destroy({
                        where: {
                            id: query.id[i]
                        }
                    })
                    if (!delete_presenter) {
                        throw new CustomException(
                            Exceptions[ExceptionType.UNABLE_TO_DELETE].message,
                            Exceptions[ExceptionType.UNABLE_TO_DELETE].status
                        )
                    }
                }
            }
            return new GenericResponseDto(
                HttpStatus.OK,
                "Deleted successfully"
            )
        }
        catch (err) {
            console.log("🚀 ~ file: presenters.service.ts ~ line 144 ~ PresentersService ~ deletePresenterById ~ err", err)
            throw err
        }
    }
}
