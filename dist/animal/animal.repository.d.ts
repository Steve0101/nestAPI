import { Animal } from "./animal.entity";
import { Repository } from "typeorm";
import { CreateAnimalDto } from "./dto/create-animal.dto";
export declare class AnimalRepository extends Repository<Animal> {
    getAnimal(): Promise<Animal[]>;
    getById(id: number): Promise<Animal>;
    createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    updateAnimal(idAnimal: number, createAnimalDto: CreateAnimalDto): Promise<Animal>;
    deleteAnimaltById(idAnimal: number): Promise<Animal>;
}
