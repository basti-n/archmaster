import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { FoodModule } from './food/food.module';
import { IntakeModule } from './intake/intake.module';
import { ArchieModule } from './archie/archie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGO_DB_USERNAME: Joi.string().required(),
        MONGO_DB_PASSWORD: Joi.string().required(),
        MONGO_DB_DATABASE: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get('MONGO_DB_USERNAME');
        const password = configService.get('MONGO_DB_PASSWORD');
        const database = configService.get('MONGO_DB_DATABASE');
        const host = configService.get('MONGO_DB_HOST');

        return {
          uri: `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true"`,
          database: database,
        };
      },
    }),
    FoodModule,
    IntakeModule,
    ArchieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
