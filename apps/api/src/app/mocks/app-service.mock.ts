import { IArchie } from '@archmaster/shared/types';
import { MockBase } from './base-mock';

const BASE_MOCK_ARCHIE: IArchie = {
  dateOfBirth: '01.01.2021',
  weight: 14,
  weightUnit: 'kg',
  food: [],
};

export class AppServiceMock extends MockBase {
  public static createMock(mockReturn: Partial<IArchie>) {
    return new AppServiceMock(mockReturn);
  }

  constructor(private readonly mockReturn: Partial<IArchie>) {
    super();
  }

  getArchie(): IArchie {
    return { ...BASE_MOCK_ARCHIE, ...this.mockReturn };
  }
}
