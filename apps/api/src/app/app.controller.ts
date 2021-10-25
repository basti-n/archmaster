import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IArchie } from '@archmaster/shared/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getArchie(): Promise<IArchie> {
    return this.appService.getArchie();
  }
}
