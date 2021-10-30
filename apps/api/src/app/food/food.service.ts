import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food, FoodDocument } from '../db/schema/food.schema';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food.name) private readonly foodModel: Model<FoodDocument>
  ) {
    this.add();
  }

  async add(): Promise<FoodDocument> {
    console.log('[ADDING] food...');

    const food = new this.foodModel({ kcal: 1000, name: 'Pizza' });
    return food.save();
  }

  update(): void {
    console.log('[UPDATING] food...');
  }
}
