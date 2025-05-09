import { Injectable } from '@nestjs/common';
import { Proponent } from './entities/proponent.entity'


@Injectable()
export class ProponentService {
    private proponents: Proponent[] = [];

    findAll(): Proponent[] {
        return this.proponents;
    }

    create(proponent: Proponent): Proponent {
        this.proponents.push(proponent);
        return proponent;
    }
}