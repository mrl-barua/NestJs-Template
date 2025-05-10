import { Injectable } from '@nestjs/common';
import { Proponent } from './entities/proponent.entity';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProponentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProponents() {
    return this.prisma.proponent.findMany();
  }

  async addProponent(data: any) {
    return this.prisma.proponent.create({ data });
  }
}
