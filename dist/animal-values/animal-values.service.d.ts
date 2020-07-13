import { ValueRepository } from './animal-values.repository';
import { Value } from './animal-values.entity';
import { CreateValueDto } from './dto/create-value.dto';
export declare class ValueService {
    private valueRepository;
    constructor(valueRepository: ValueRepository);
    findAll(): Promise<Value[]>;
    getById(id: number): Promise<Value>;
    createValue(createValueDto: CreateValueDto): Promise<Value>;
    updateValue(id: number, createValueDto: CreateValueDto): Promise<Value>;
    deleteValue(id: number): Promise<Value>;
}
