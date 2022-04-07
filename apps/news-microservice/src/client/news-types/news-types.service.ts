import { News } from '@cnbc-monorepo/entity';
import { sequelize } from '@cnbc-monorepo/utility';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsTypesService {
  async getAllNews(entity) {
    return await sequelize.getRepository(entity).findAll({
      include: [
        {
          model: News,
          where: {
            isActive: true,
          },
          include: ['image', 'thumbnail'],
        },
      ],
    });
  }
}
