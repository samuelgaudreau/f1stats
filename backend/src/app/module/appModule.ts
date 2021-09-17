import { Module } from '@nestjs/common';
import { AppController } from '../controller/appController';
import { AppService } from '../service/appService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
