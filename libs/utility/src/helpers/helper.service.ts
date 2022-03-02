import { ChangeLogs } from "@cnbc-monorepo/entity";
import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import {AddLogRequestDto} from '@cnbc-monorepo/dtos'
@Injectable()
export class Helper {
    constructor(
        @Inject('CHANGE_LOGS_REPOSITORY')
        private changeLogsRepository: typeof ChangeLogs,
    ){}
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
    offsetCalculator(pageNo : number,limit : number){
        return (pageNo -1) * limit
    }
    stringTrimmerAndCaseLower(name :string){
        return name.toLocaleLowerCase().trim()
    }
    async addLog(body : any){
        return await this.changeLogsRepository.create(body)
    }
    logObjectCreator(changeType,entityType,id,changeDate,changeComment,req){
        const logObject = {
            changeType : changeType,
            entityType : entityType,
            entityId : id,
            changeDate : changeDate,
            changeComment : changeComment,
            ipAddress : req.ip,
            sessionsId : req.user.sessionId,
            changedBy : req.user.data.id
        }
        return logObject;
    }
}