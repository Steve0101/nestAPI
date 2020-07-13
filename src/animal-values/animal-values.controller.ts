import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Value } from './animal-values.entity'
import { ValueService } from './animal-values.service';
import { CreateValueDto } from './dto/create-value.dto';

@Controller('animal-values')
export class ValueController {
        constructor(private valueService: ValueService) {} 
        
        @Get()
        getValue(): Promise<Value[]>{
            return this.valueService.findAll();
        }

        @Get('/:id')
        getValueById(@Param('id', ParseIntPipe) id: number): Promise<Value> {
            return this.valueService.getById(id);
        } 

        @Post()
        async createValue(@Body() createValueDto: CreateValueDto): Promise<Value>{
            return this.valueService.createValue(createValueDto);
        }

        @Put(':id')
        async updateValue(@Param('id') id : number, @Body() createValueDto: CreateValueDto) : Promise<Value>{
            return this.valueService.updateValue(id, createValueDto);
        }

        @Delete(':id')
        async deleteValue(@Param('id') id : number) : Promise<Value>{
            return this.valueService.deleteValue(id);
        }
    }
    