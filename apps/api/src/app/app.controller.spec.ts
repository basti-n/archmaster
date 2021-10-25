import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceMock } from '@archmaster/app/mocks';

describe('AppController', () => {
  let app: TestingModule;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: AppServiceMock.createMock({ age: 12 }),
        },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getArchie', () => {
    beforeEach(() => {
      jest.spyOn(appService, 'getArchie');
    });
    it('should return some fake data for the time being', async () => {
      const appController = app.get<AppController>(AppController);

      const result = await appController.getArchie();
      expect(result.age).toBe(12);
      expect(appService.getArchie).toHaveBeenCalledTimes(1);
    });
  });
});
