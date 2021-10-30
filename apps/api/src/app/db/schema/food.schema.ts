import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Document & Food;

@Schema()
export class Food {
  @Prop()
  name: string;

  @Prop()
  kcal: number;

  @Prop({ required: false })
  protein: number;

  @Prop({ required: false })
  fat: number;

  @Prop({ required: false })
  carbohydrates: number;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
