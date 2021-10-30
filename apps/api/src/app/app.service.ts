import { Injectable } from '@nestjs/common';
import { IArchie } from '@archmaster/shared/types';

@Injectable()
export class AppService {
  getArchie(): IArchie {
    // Todo get data from MongoDB
    return {
      dateOfBirth: '19.09.2020',
      weight: 14,
      weightUnit: 'kg',
      food: [],
    };
  }
}
