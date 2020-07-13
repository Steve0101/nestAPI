import { Value } from "./animal-values.entity";
import { Repository, Entity, EntityRepository } from "typeorm";
import { CreateValueDto } from "./dto/create-value.dto";

@EntityRepository(Value)
export class ValueRepository extends Repository<Value>{

    async getValue(): Promise<Value[]>{
        const querry = this.createQueryBuilder('Value');
        return await querry.getMany();
    }

    async getById(id: number): Promise<Value>{
        const query = this.createQueryBuilder("Value")            
        .where("value.id = id", { id: id });
        
        return await query.getOne();     
    }

    async createValue(createValueDto: CreateValueDto): Promise<Value>{
        const value = new Value();
        value.id = createValueDto.id;
        value.heigth = createValueDto.heigth;
        value.weigth = createValueDto.weigth;
        value.age = createValueDto.age;
        
        await value.save();
        return value;
    }

    async updateValue(idValue: number, createValueDto: CreateValueDto): Promise<Value>{
        const query = this.createQueryBuilder("Value")
        .update(createValueDto)
        .where("id = :id", {id: idValue});

        await query.execute();
        return this.getById(idValue);
    }

    async deleteValueById(idValue: number): Promise<Value>{
        const query = this.createQueryBuilder("Value")
        .delete()
        .where("id = :id", {id: idValue});

        await query.execute()
        return this.getById(idValue);

    }
}