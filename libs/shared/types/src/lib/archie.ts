import { FoodHistory } from './food';

export interface IArchie {
  age: number;
  weight: number;
  weightUnit: 'kg' | 'lb';
  food: FoodHistory;
}
