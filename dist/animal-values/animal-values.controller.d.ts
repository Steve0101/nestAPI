import { Value } from './animal-values.entity';
import { ValueService } from './animal-values.service';
import { CreateValueDto } from './dto/create-value.dto';
export declare class ValueController {
    private valueService;
    constructor(valueService: ValueService);
    getValue(): Promise<Value[]>;
    getValueById(id: number): Promise<Value>;
    createValue(createValueDto: CreateValueDto): Promise<Value>;
    updateValue(id: number, createValueDto: CreateValueDto): Promise<Value>;
    deleteValue(id: number): Promise<Value>;
}
