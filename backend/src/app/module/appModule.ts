import { Module } from '@nestjs/common';
import { AppController } from '../controller/appController';
import { AppService } from '../service/appService';
import { F1Repository } from '../service/f1Repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, F1Repository],
})
export class AppModule {}
