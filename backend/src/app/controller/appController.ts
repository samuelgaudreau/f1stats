/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/appService';
import { F1Repository } from '../service/f1Repository';
import { Driver } from '../types/f1Types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly f1Repository: F1Repository) {}

  @Get('/drivers')
  async getDrivers(): Promise<Driver[]> {
    return await this.f1Repository.getDrivers('2021');
  }
}
