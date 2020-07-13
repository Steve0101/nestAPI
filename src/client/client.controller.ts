import { Controller, Get, ParseIntPipe, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { Client } from './client.entity'
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {}
    
    @Get()
    getClient(): Promise<Client[]>{
        return this.clientService.findAll(); 
    }

    @Get('/:id')
    getClientById(@Param('id', ParseIntPipe) id: number): Promise<Client> {
        return this.clientService.getById(id);
    } 

    @Post()
    async createClient(@Body() createClientDto: CreateClientDto): Promise<Client>{
        return this.clientService.createClient(createClientDto);
    }

    @Put(':id')
    async updateClient(@Param('id') id : number, @Body() createClientDto: CreateClientDto) : Promise<Client>{
        return this.clientService.updateClient(id, createClientDto);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id : number) : Promise<Client>{
        return this.clientService.deleteClient(id);
    }
}
