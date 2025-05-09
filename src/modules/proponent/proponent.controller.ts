import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProponentService } from './proponent.service';
import { Proponent } from './entities/proponent.entity';


@Controller('proponents')
export class ProponentController {
    constructor(private readonly proponentService: ProponentService) {}

    @Get()
    findAll(): Proponent[] {
        return this.proponentService.findAll();       
    }

    @Post()
    create(@Body() proponent: Proponent): Proponent {
        return this.proponentService.create(proponent);
    }
}