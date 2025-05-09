import { Module } from '@nestjs/common';
import { ProponentController } from './proponent.controller';
import { ProponentService } from './proponent.service';

@Module({
    controllers: [ProponentController],
    providers: [ProponentService],
})
export class ProponentModule {}
