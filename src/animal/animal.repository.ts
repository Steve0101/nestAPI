import { Animal } from "./animal.entity";
import { Repository, Entity, EntityRepository } from "typeorm";
import { CreateAnimalDto } from "./dto/create-animal.dto";

@EntityRepository(Animal)
export class AnimalRepository extends Repository<Animal>{

    async getAnimal(): Promise<Animal[]>{
        const querry = this.createQueryBuilder("Animal");
        return await querry.getMany();
    }

    async getById(id: number): Promise<Animal>{
        const query = this.createQueryBuilder("Animal")            
        .where("animal.id = id", { id: id });
        
        return await query.getOne();     
    }

    async createAnimal(createAnimalDto: CreateAnimalDto): Promise<Animal>{
        const animal = new Animal();
        animal.id = createAnimalDto.id;
        animal.name = createAnimalDto.name;
        animal.breed = createAnimalDto.breed;

        await animal.save();
        return animal;
    }

    async updateAnimal(idAnimal: number, createAnimalDto: CreateAnimalDto): Promise<Animal>{
        const query = this.createQueryBuilder("Animal")
        .update(createAnimalDto)
        .where("id = :id", {id: idAnimal});

        await query.execute();
        return this.getById(idAnimal);
    }

    async deleteAnimaltById(idAnimal: number): Promise<Animal>{
        const query = this.createQueryBuilder("Animal")
        .delete()
        .where("id = :id", {id: idAnimal});

        await query.execute()
        return this.getById(idAnimal);
    }
}