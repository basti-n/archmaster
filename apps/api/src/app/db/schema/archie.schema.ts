import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IFoodHistory, IArchie } from '@archmaster/shared/types';
import { FoodEntrySchema } from './food-entry.schema';

export type ArchieDocument = Document & Archie;

@Schema()
export class Archie implements IArchie {
  @Prop()
  dateOfBirth: string;

  @Prop()
  weight: number;

  @Prop()
  weightUnit: 'kg' | 'lb';

  @Prop({ type: [FoodEntrySchema] })
  food: IFoodHistory;
}

export const ArchieSchema = SchemaFactory.createForClass(Archie);
