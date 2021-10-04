/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Driver } from '../types/f1Types';
import { ParseDrivers } from '../service/parsers/driverParsers'

@Injectable()
export class F1Repository {
  async getDrivers(year: string): Promise<Driver[]> {
    axios.defaults;
    const response = await axios.get(`https://ergast.com/api/f1/${year}/drivers.json`);
    const drivers = ParseDrivers(response.data.MRData.DriverTable.Drivers)
    console.log(drivers);
    return drivers;
  }

  getSwag(): string {
    return 'Hello World!';
  }
}
