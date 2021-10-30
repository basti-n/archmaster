import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbCollection } from '../db/constants/collection.constants';
import { Archie, ArchieSchema } from '../db/schema/archie.schema';
import { ArchieService } from './archie.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Archie.name,
        schema: ArchieSchema,
        collection: DbCollection.ARCHIE,
      },
    ]),
  ],
  controllers: [],
  providers: [ArchieService],
  exports: [ArchieService],
})
export class ArchieModule {}
