import { Controller, Get, Param, ParseIntPipe, Body, Post, Put, Delete } from '@nestjs/common';
import { Animal } from './animal.entity'
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Controller('animal')
export class AnimalController {
        constructor(private animalService: AnimalService) {} 
        
        @Get()
        getAnimal(): Promise<Animal[]>{
            return this.animalService.findAll();
        }

        @Post()
        async createAnimal(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal>{
            return this.animalService.createAnimal(createAnimalDto);
        }
    
        @Put(':id')
        async updateAnimal(@Param('id') id : number, @Body() createAnimalDto: CreateAnimalDto) : Promise<Animal>{
            return this.animalService.updateAnimal(id, createAnimalDto);
        }
    
        @Delete(':id')
        async deleteAnimal(@Param('id') id : number) : Promise<Animal>{
            return this.animalService.deleteAnimal(id);
        }
    }
    