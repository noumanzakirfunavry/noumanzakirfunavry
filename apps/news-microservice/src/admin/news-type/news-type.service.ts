import { HttpStatus, Injectable } from '@nestjs/common';
import { Helper, sequelize } from '@cnbc-monorepo/utility'
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { GenericResponseDto } from '@cnbc-monorepo/dtos';

@Injectable()
export class NewsTypeService {
    constructor(
        private helperService: Helper
    ) { }

    async getAllNews(entity) {
        return await sequelize.getRepository(entity).findAll({
            include: ['news']
        }
        )
    }
    async updateNews(entity, body, userId) {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                const delete_previous = await this.deletePreviousNews(entity, transactionHost)
                if (delete_previous) {
                    body = this.helperService.addUser(body, userId)
                    let addNews;
                    for (let i = 0; i < body.news.length; i++) {
                        addNews = await this.addNews(addNews, entity, body, i, transactionHost);
                        if (!addNews) {
                            throw new CustomException(
                                Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                                Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                            )
                        }
                    }
                    return new GenericResponseDto(
                        HttpStatus.OK,
                        "News updated successfully"
                    )
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                    )
                }
            })
        }
        catch (err) {
            console.log("🚀 ~ file: news-type.service.ts ~ line 20 ~ NewsTypeService ~ updateNews ~ err", err)
            throw err
        }
    }

    private async addNews(addNews: any, entity: any, body: any, i: number, transactionHost) {
        addNews = await sequelize.getRepository(entity).create(body.news[i], transactionHost);
        return addNews;
    }

    private async deletePreviousNews(entity: any, transactionHost) {
        const response = await sequelize.getRepository(entity).destroy({
            where: {},
            truncate: true,
            transaction: transactionHost.transaction
        });
        return response === 0 ? true : response
    }
}
