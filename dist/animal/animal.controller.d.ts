import { Animal } from './animal.entity';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
export declare class AnimalController {
    private animalService;
    constructor(animalService: AnimalService);
    getAnimal(): Promise<Animal[]>;
    createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    updateAnimal(id: number, createAnimalDto: CreateAnimalDto): Promise<Animal>;
    deleteAnimal(id: number): Promise<Animal>;
}
