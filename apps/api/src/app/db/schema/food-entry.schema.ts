import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IFoodEntry } from '@archmaster/shared/types';

@Schema()
export class FoodEntry implements IFoodEntry {
  @Prop()
  calories: number;

  @Prop()
  ingredients: string[];

  @Prop()
  day: string;
}

export const FoodEntrySchema = SchemaFactory.createForClass(FoodEntry);
