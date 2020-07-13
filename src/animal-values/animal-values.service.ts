import { Injectable } from '@nestjs/common';
import { ValueRepository } from './animal-values.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Value } from './animal-values.entity';
import { CreateValueDto } from './dto/create-value.dto';

@Injectable()
export class ValueService {

    constructor(
        @InjectRepository(ValueRepository)
        private valueRepository: ValueRepository) {}

    async findAll(): Promise<Value[]>{
        return this.valueRepository.getValue();
    }

    async getById(id: number): Promise<Value> {
        return  this.valueRepository.getById(id);
    }  

    //POST
    async createValue(createValueDto: CreateValueDto) : Promise<Value>{
        return this.valueRepository.createValue(createValueDto);
    }

    //PUT
    async updateValue(id: number, createValueDto: CreateValueDto) :  Promise<Value>{
        return this.valueRepository.updateValue(id, createValueDto);
    }

    //DELETE
    async deleteValue(id: number) : Promise<Value>{
        return this.valueRepository.deleteValueById(id);
    }

}
