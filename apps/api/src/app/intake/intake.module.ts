import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbCollection } from '../db/constants/collection.constants';
import { Intake, IntakeSchema } from '../db/schema/intake.schema';
import { IntakeService } from './intake.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Intake.name,
        schema: IntakeSchema,
        collection: DbCollection.INTAKE,
      },
    ]),
  ],
  controllers: [],
  providers: [IntakeService],
  exports: [IntakeService],
})
export class IntakeModule {}
