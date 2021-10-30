import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type IntakeDocument = Document & Intake;

@Schema()
export class Intake {
  @Prop()
  food: string;

  @Prop()
  quantity: number;
}

export const IntakeSchema = SchemaFactory.createForClass(Intake);
