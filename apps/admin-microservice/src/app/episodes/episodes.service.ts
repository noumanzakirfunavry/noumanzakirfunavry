import { CreateEpisodeRequestDto, GenericResponseDto } from '@cnbc-monorepo/dtos';
import { Episodes, EpisodesHasQuotes, EpisodesHasTags, SeoDetails } from '@cnbc-monorepo/entity';
import { CustomException, Exceptions, ExceptionType } from '@cnbc-monorepo/exception-handling';
import { Helper, sequelize } from '@cnbc-monorepo/utility';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class EpisodesService {
    constructor(
        private helperService: Helper,
        @Inject('EPISODE_HAS_TAGS_REPOSITORY')
        private episodeHasTagsRepository: typeof EpisodesHasTags,
        @Inject('EPISODE_HAS_QUOTES_REPOSITORY')
        private episodeHasQuotesRepository: typeof EpisodesHasQuotes,
        @Inject('EPISODES_REPOSITORY')
        private episodeRepository: typeof Episodes,
        @Inject('SEO_DETAILS_REPOSITORY')
        private seoDetailsRepository: typeof SeoDetails
    ) { }

    async createEpisode(body: CreateEpisodeRequestDto, userId: number): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                const seo_added = await this.addSeo(body, transactionHost)
                if (seo_added) {
                    const episode_object = this.helperService.episodesObjectCreator(body, seo_added.id, userId)
                    const episode_added = await this.addEpisodeQuery(episode_object, transactionHost)
                    if (episode_added) {
                        if (body.tagsIds && body.tagsIds.length !== 0) {
                            const episode_tags = await this.addEpisodeTags(body.tagsIds, episode_added.id, transactionHost)
                            if (!episode_tags) {
                                throw new CustomException(
                                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                                )
                            }
                        }
                        if (body.quotesIds && body.quotesIds.length !== 0) {
                            const episode_quotes = await this.addEpisodeQuotes(body.quotesIds, episode_added.id, transactionHost)
                            if (!episode_quotes) {
                                throw new CustomException(
                                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                                    Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                                )
                            }
                        }
                        return new GenericResponseDto(
                            HttpStatus.OK,
                            "Episode added successfully"
                        )
                    }
                    else {
                        throw new CustomException(
                            Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                            Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                        )
                    }
                }
                else {
                    throw new CustomException(
                        Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                        Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                    )
                }
            })
        }
        catch (err) {
            console.log("🚀 ~ file: news.service.ts ~ line 12 ~ NewsService ~ addNews ~ err", err)
            throw err;
        }
    }

    async updateEpisode(body: CreateEpisodeRequestDto, id: number, userId: number): Promise<GenericResponseDto> {
        try {
            return await sequelize.transaction(async t => {
                const transactionHost = { transaction: t };
                const episode_exists = await this.episodeExistsQuery(id)
                if (episode_exists) {
                    const seo_updated = await this.updateSeoQuery(body)
                    if (seo_updated) {
                        const episode_object = this.helperService.episodesObjectCreator(body, body.seoDetails.id, userId)
                        const episode_updated = await this.updateEpisodeQuery(episode_object, id)
                        if (episode_updated) {
                            if (body.tagsIds && body.tagsIds.length !== 0) {
                                const delete_previous_tags = await this.deletePreviousTagsQuery(id)
                                if (delete_previous_tags) {
                                    const episodes_tags = await this.addEpisodeTags(body.tagsIds, id, transactionHost)
                                    if (!episodes_tags) {
                                        throw new CustomException(
                                            Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].message,
                                            Exceptions[ExceptionType.UNABLE_TO_CREATE_RECORD].status
                                        )
                                    }
                                }
                                else {
                                    throw new CustomException(
                                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                                    )
                                }
                            }
                            if (body.quotesIds && body.quotesIds.length !== 0) {
                                const delete_episode_quotes = await this.deleteEpisodeQuotesQuery(id)
                                if (delete_episode_quotes) {
                                    const episode_quotes = await this.addEpisodeQuotes(body.quotesIds, id, transactionHost)
                                    if (!episode_quotes) {
                                        throw new CustomException(
                                            Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                                            Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                                        )
                                    }
                                }
                                else {
                                    throw new CustomException(
                                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].message,
                                        Exceptions[ExceptionType.UNABLE_TO_UPDATE].status
                                    )
                                }
                            }
                            return new GenericResponseDto(
                                HttpStatus.OK,
                                "Episode updated successfully"
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
            })
        }
        catch (err) {
            console.log("🚀 ~ file: news.service.ts ~ line 12 ~ NewsService ~ addNews ~ err", err)
            throw err;
        }
    }

    private async episodeExistsQuery(id: number) {
        return await this.episodeRepository.findOne({
            where: {
                id: id
            }
        });
    }

    private async deleteEpisodeQuotesQuery(id: number) {
        const response = await this.episodeHasQuotesRepository.destroy({
            where: {
                episodesId: id
            }
        });
        return response === 0 ? true : response
    }

    private async deletePreviousTagsQuery(id: number) {
        const response = await this.episodeHasTagsRepository.destroy({
            where: {
                episodesId: id
            }
        });
        return response === 0 ? true : response
    }

    private async updateEpisodeQuery(episode_object: { seoDetailId: number; publishedBy: number; programId: number; thumbnailId: number; videoId: number; airedOn: Date; title: string; description: string; isActive: boolean; }, id: number) {
        return await this.episodeRepository.update(episode_object, {
            where: {
                id: id
            }
        });
    }

    private async updateSeoQuery(body: CreateEpisodeRequestDto) {
        return await this.seoDetailsRepository.update(body.seoDetails, {
            where: {
                id: body.seoDetails.id
            }
        });
    }

    private async addEpisodeQuery(episode_object: { seoDetailId: number; publishedBy: number; programId: number; thumbnailId: number; videoId: number; airedOn: Date; title: string; description: string; isActive: boolean; }, transactionHost) {
        return await this.episodeRepository.create(episode_object, { transaction: transactionHost.transaction });
    }

    private async addSeo(body: any, transactionHost) {
        return await this.seoDetailsRepository.create(body.seoDetails, transactionHost);
    }

    private async addEpisodeTags(tagsIds: number[], episodesId: number, transactionHost) {
        let tags_added;
        let tags_object;
        for (let i = 0; i < tagsIds.length; i++) {
            tags_object = this.helperService.tagsObjectEpisode(tagsIds[i], episodesId)
            tags_added = await this.episodeHasTagsRepository.create(tags_object, { transaction: transactionHost.transaction })
            if (!tags_added) {
                return false
            }
        }
        return true
    }
    private async addEpisodeQuotes(quotesIds, episodesId: number, transactionHost) {
        let quotes_added;
        let quotes_object;
        for (let i = 0; i < quotesIds.length; i++) {
            quotes_object = this.helperService.quotesObjectEpisode(quotesIds[i], episodesId)
            quotes_added = await this.episodeHasQuotesRepository.create(quotes_object, transactionHost)
            if (!quotes_added) {
                return false
            }
        }
        return true
    }
}
