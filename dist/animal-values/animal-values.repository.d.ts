import { Value } from "./animal-values.entity";
import { Repository } from "typeorm";
import { CreateValueDto } from "./dto/create-value.dto";
export declare class ValueRepository extends Repository<Value> {
    getValue(): Promise<Value[]>;
    getById(id: number): Promise<Value>;
    createValue(createValueDto: CreateValueDto): Promise<Value>;
    updateValue(idValue: number, createValueDto: CreateValueDto): Promise<Value>;
    deleteValueById(idValue: number): Promise<Value>;
}
