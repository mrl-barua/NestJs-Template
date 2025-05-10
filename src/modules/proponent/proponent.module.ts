import { Module } from '@nestjs/common';
import { ProponentController } from './proponent.controller';
import { ProponentService } from './proponent.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProponentController],
  providers: [ProponentService],
})
export class ProponentModule {}
