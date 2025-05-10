import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProponentModule } from './modules/proponent/proponent.module';
import { ProponentController } from './modules/proponent/proponent.controller';
import { ProponentService } from './modules/proponent/proponent.service';

import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProponentModule, PrismaModule],
  controllers: [AppController, ProponentController],
  providers: [AppService, ProponentService, PrismaService],
})
export class AppModule {}
