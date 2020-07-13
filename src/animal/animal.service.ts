import { Injectable } from '@nestjs/common';
import { AnimalRepository } from './animal.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalService {

    constructor(
        @InjectRepository(AnimalRepository)
        private animalRepository: AnimalRepository) {}

    async findAll(): Promise<Animal[]>{
        return this.animalRepository.getAnimal();
    }

    async getById(id: number): Promise<Animal> {
        return  this.animalRepository.getById(id);
    }  

    //POST
    async createAnimal(createAnimalDto: CreateAnimalDto) : Promise<Animal>{
        return this.animalRepository.createAnimal(createAnimalDto);
    }

    //PUT
    async updateAnimal(id: number, createAnimalDto: CreateAnimalDto) :  Promise<Animal>{
        return this.animalRepository.updateAnimal(id, createAnimalDto);
    }

    //DELETE
    async deleteAnimal(id: number) : Promise<Animal>{
        return this.animalRepository.deleteAnimaltById(id);
    }

}
