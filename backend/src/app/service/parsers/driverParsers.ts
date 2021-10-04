/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Driver } from "../../types/f1Types";

/* eslint-disable prettier/prettier */
export function ParseDrivers(driversResponse : any) : Driver[] {
    const drivers = [] as Array<Driver>;
    driversResponse.forEach((driver : Driver) => drivers.push({
        givenName: driver.givenName,
        familyName: driver.familyName,
        permanentNumber: driver.permanentNumber,
        code: driver.code,
        dateOfBirth: driver.dateOfBirth,
        driverId: driver.driverId,
        nationality: driver.nationality
    }));

    return drivers;
}