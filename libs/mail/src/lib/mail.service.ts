import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private jwtService: JwtService,) { }
  async mailTester(email) {
    const url = "http://localhost:3333/api/authentication/password/reset/" + await this.tokenGeneration(email)
    console.log("🚀 ~ file: mail.service.ts ~ line 10 ~ MailService ~ mailTester ~ url", url)
    return await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to CNBC!',
      html: `<p>Hey!</p><br/>
          <p>If you want to reset your password, click on the link below</p>
          <p>
              <a href="${url}">Reset Password</a>
          </p>
          
          <p>If you did not request this email you can safely ignore it.</p>`,
      context: {
        url: url,
      },
    });
  }
  async tokenGeneration(email) {
    const payload = {
      email: email,
      creationDate: new Date()
    }
    return this.jwtService.sign(payload)
  }
}