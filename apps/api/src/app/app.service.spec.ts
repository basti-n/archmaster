import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getArchie', () => {
    it('should return some fake data for the time being', () => {
      const result = service.getArchie();
      expect(typeof result.age === 'number').toBeTruthy();
      expect(typeof result.weight === 'number').toBeTruthy();
      expect(typeof result.weightUnit === 'string').toBeTruthy();
      expect(Array.isArray(result.food)).toBeTruthy();
    });
  });
});
