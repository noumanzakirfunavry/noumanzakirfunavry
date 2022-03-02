import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailService } from '../lib/mail.service';
import {AuthModuleModule} from '@cnbc-monorepo/auth-module'

@Module({
  controllers: [],
  providers: [MailService],
  exports: [MailerModule],
  imports : [
    AuthModuleModule,
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'hjaved.bscs16seecs@seecs.edu.pk',
          pass: 'constantine786',
        },
      },
      defaults: {
        from: '"CNBC" <noreply@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ]
})
export class MailModule {}
