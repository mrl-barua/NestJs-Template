import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProponentModule } from './modules/proponent/proponent.module';

@Module({
  imports: [ProponentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
