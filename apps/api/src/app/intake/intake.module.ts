import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Intake, IntakeSchema } from '../db/schema/intake.schema';
import { IntakeService } from './intake.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Intake.name, schema: IntakeSchema, collection: 'intake' },
    ]),
  ],
  controllers: [],
  providers: [IntakeService],
  exports: [IntakeService],
})
export class IntakeModule {}
