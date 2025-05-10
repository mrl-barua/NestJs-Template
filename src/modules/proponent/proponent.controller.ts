import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProponentService } from './proponent.service';
import { Proponent } from './entities/proponent.entity';

@Controller('proponents')
export class ProponentController {
  constructor(private readonly proponentService: ProponentService) {}

  @Get()
  async getAllProponents(): Promise<Proponent[]> {
    return await this.proponentService.getAllProponents();
  }

  @Post()
  async addProponent(@Body() proponent: Proponent): Promise<Proponent> {
    return await this.proponentService.addProponent(proponent);
  }
}
