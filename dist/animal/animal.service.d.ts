import { AnimalRepository } from './animal.repository';
import { Animal } from './animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
export declare class AnimalService {
    private animalRepository;
    constructor(animalRepository: AnimalRepository);
    findAll(): Promise<Animal[]>;
    getById(id: number): Promise<Animal>;
    createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    updateAnimal(id: number, createAnimalDto: CreateAnimalDto): Promise<Animal>;
    deleteAnimal(id: number): Promise<Animal>;
}
