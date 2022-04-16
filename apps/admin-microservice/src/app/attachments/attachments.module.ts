import { ProvidersModule } from '@cnbc-monorepo/providers';
import {
  editFileName,
  imageFileFilter,
  UtilityModule,
} from '@cnbc-monorepo/utility';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AttachmentsController } from './attachments.controller';
import { AttachmentsService } from './attachments.service';
import 'dotenv/config';
import { diskStorage } from 'multer';

@Module({
  controllers: [AttachmentsController],
  providers: [AttachmentsService],
  imports: [
    UtilityModule,
    ProvidersModule,
      MulterModule.registerAsync({
        useFactory: () => ({
          storage: diskStorage({
            destination: process.env.DATABASE_FILE_UPLOAD_PATH,
            filename: editFileName,
          }),
          fileFilter: imageFileFilter,
        }),
      }),
  ],
})
export class AttachmentsModule {}
