import { IFoodHistory } from './food';

export interface IArchie {
  dateOfBirth: string;
  weight: number;
  weightUnit: 'kg' | 'lb';
  food: IFoodHistory;
}
