import { CreateAlertRequestDto, DeleteAlexaAudioRequestDto, GenericResponseDto, GetAlertByIdResponseDto, GetAlertsRequestDto, GetAllAlertsResponseDto } from '@cnbc-monorepo/dtos';
import { Alerts } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class AlertsService {
    constructor(
        @Inject('ALERTS_REPOSITORY')
        private alertsRepository: typeof Alerts,
        private helperService: Helper
    ) { }
    async createAlert(body): Promise<GenericResponseDto> {
        try {
            const alert_created = await this.createAlertQuery(body)
            if (alert_created) {
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Alert created successfully"
                )
            }
            else {
                throw new CustomException(
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].message,
                    Exceptions[ExceptionType.SOMETHING_WENT_WRONG].status
                )
            }
        }
        catch (err) {
            console.log("🚀 ~ file: alerts.service.ts ~ line 31 ~ AlertsService ~ createAlert ~ err", err)
            throw err
        }
    }
    async getAllAlerts(query: GetAlertsRequestDto): Promise<GetAllAlertsResponseDto> {
        try {
            const alert_array = await this.alertArrayQuery(query);
            return new GetAllAlertsResponseDto(
                HttpStatus.OK,
                "Alerts fetched successfully",
                alert_array.rows,
                alert_array.count
            )
        }
        catch (err) {
            console.log("🚀 ~ file: alerts.service.ts ~ line 40 ~ AlertsService ~ getAllAlerts ~ err", err)
            throw err
        }
    }
    async getAlertById(id: number): Promise<GetAlertByIdResponseDto> {
        const response = await this.alertExists(id)
        if (response) {
            return new GetAlertByIdResponseDto(
                HttpStatus.OK,
                "Alert fetched successfully",
                response
            )
        }
        else {
            throw new CustomException(
                Exceptions[ExceptionType.RECORD_NOT_FOUND].message,
                Exceptions[ExceptionType.RECORD_NOT_FOUND].status
            )
        }
    }

    async deleteAlertById(query: DeleteAlexaAudioRequestDto): Promise<GenericResponseDto> {
        let alert_exists;
        let response;
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                for (let i = 0; i < query.id.length; i++) {
                    alert_exists = await this.alertExists(query.id[i])
                    if (alert_exists) {
                        response = await this.deleteAlertQuery(query.id[i], transactionHost)
                        if (!response) {
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
                }
                return new GenericResponseDto(
                    HttpStatus.OK,
                    "Deleted successfully"
                )
            })
        }
        catch (err) {
            console.log("🚀 ~ file: live-stream-links.service.ts ~ line 141 ~ LiveStreamLinksService ~ deleteLiveStreamLinkById ~ err", err)
            throw err
        }

    }

    private async deleteAlertQuery(id, transactionHost) {
        return await this.alertsRepository.destroy({
            where: {
                id: id
            },
            transaction: transactionHost.transaction
        })
    }

    private async alertArrayQuery(query: GetAlertsRequestDto) {
        return await this.alertsRepository.findAndCountAll({
            where: {
                ...(query.search && {
                    title: {
                        [Op.like]: `%${this.helperService.stringTrimmerAndCaseLower(query.search)}%`
                    }
                }),
                ...(query.needToSend && {
                    needToSend: JSON.parse(query.needToSend.toString())
                })
            },
            limit: parseInt(query.limit.toString()),
            offset: this.helperService.offsetCalculator(query.pageNo, query.limit)
        });
    }

    private async createAlertQuery(body: any) {
        return await this.alertsRepository.create(body);
    }

    async updateAlert(body: CreateAlertRequestDto, id: number): Promise<GenericResponseDto> {
        try {
            const alert_exists = await this.alertExists(id)
            if (alert_exists) {
                const update_Alert = await this.updateAlertQuery(body, id)
                if (update_Alert) {
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "Alert updated successfully"
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
            console.log("🚀 ~ file: alerts.service.ts ~ line 44 ~ AlertsService ~ updateAlert ~ err", err)
            throw err
        }
    }

    private async alertExists(id: number) {
        return await this.alertsRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async updateAlertQuery(body: CreateAlertRequestDto, id: number) {
        return await this.alertsRepository.update(body, {
            where: {
                id: id
            }
        });
    }
}
