import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Intake, IntakeDocument } from '../db/schema/intake.schema';

@Injectable()
export class IntakeService {
  constructor(
    @InjectModel(Intake.name)
    private readonly intakeModel: Model<IntakeDocument>
  ) {
    this.add();
  }

  async add(): Promise<IntakeDocument> {
    console.log('[ADDING] intake...');

    const intake = new this.intakeModel({ food: 'Pizza', quantity: 400 });

    return intake.save();
  }

  update(): void {
    console.log('[UPDATING] intake...');
  }
}
