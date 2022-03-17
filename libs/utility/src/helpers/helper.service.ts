import { ChangeLogs } from "@cnbc-monorepo/entity";
import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { AddLogRequestDto, CreateNewsRequestDto } from '@cnbc-monorepo/dtos'
@Injectable()
export class Helper {
    constructor(
        @Inject('CHANGE_LOGS_REPOSITORY')
        private changeLogsRepository: typeof ChangeLogs,
    ) { }
    async comparePasswords(password, hash) {
        return await bcrypt.compare(password, hash)
    }
    async encryptPassword(password: string) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash
    }
    addHoursToDate(date: Date, hours: number): Date {
        return new Date(new Date(date).setHours(date.getHours() + hours));
    }
    userObjectCreator(user) {
        const response = {
            id: user.id,
            email: user.email,
            name: user.name,
            userName: user.userName,
        }
        return response
    }

    extractRights(rights) {
        const newrights = rights.map((item) => item.title)
        return newrights
    }
    offsetCalculator(pageNo: number, limit: number) {
        return (pageNo - 1) * limit
    }
    stringTrimmerAndCaseLower(name: string) {
        return name.toLocaleLowerCase().trim()
    }
    async addLog(body: any) {
        return await this.changeLogsRepository.create(body)
    }
    logObjectCreator(changeType, entityType, id, changeDate, changeComment, req) {
        const logObject = {
            changeType: changeType,
            entityType: entityType,
            entityId: id,
            changeDate: changeDate,
            changeComment: changeComment,
            ipAddress: req.ip,
            sessionsId: req.user.sessionId,
            changedBy: req.user.data.id
        }
        return logObject;
    }

    newsObjectCreator(body: CreateNewsRequestDto, seoDetailId: number, userId: number) {
        const news_object = {
            title: body.title,
            content: body.content,
            isPro: body.isPro,
            visible: body.visible,
            contentType: body.contentType,
            ...(body.videoId && {
                videoId: body.videoId
            }),
            ...(body.thumbnailId && {
                thumbnailId: body.thumbnailId
            }),
            ...(body.imageId && {
                imageId: body.imageId
            }),
            authorName: body.authorName,
            ...(body.facebookLink && {
                facebookLink: body.facebookLink
            }),
            ...(body.twitterLink && {
                twitterLink: body.twitterLink
            }),
            newsType: body.newsType,
            showOnHomePage: body.showOnHomepage,
            isActive: body.isActive,
            seoDetailId: seoDetailId,
            publishedBy: userId
        }
        return news_object
    }
    categoryObject(categoryId, newsId) {
        return {
            categoryId: categoryId,
            newsId: newsId
        }
    }
    tagsObject(tagsId, newsId) {
        return {
            tagId: tagsId,
            newsId: newsId
        }
    }
    quotesObject(position, quotesId, newsId) {
        return {
            position: position,
            quotesId: quotesId,
            newsId: newsId
        }
    }
    addUser(body, userId) {
        if (body.news.length > 0) {
            for (let i = 0; i < body.news.length; i++) {
                body.news[i] = {
                    ...body.news[i],
                    addedBy: userId
                }
            }
            return body
        }
    }
    liveStreamObj(body,userId){
        return {
            ...body,
            userId : userId
        }
    }
}