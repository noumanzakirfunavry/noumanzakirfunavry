import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Helper {
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
}