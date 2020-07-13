import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(ClientRepository)
        private clientRepository: ClientRepository) {} 
    
    //GET
    async findAll(): Promise<Client[]>{
        return this.clientRepository.getClient();
    }

    async getById(id: number): Promise<Client> {
        return  this.clientRepository.getById(id);
    }  

    //POST
    async createClient(createClientDto: CreateClientDto) : Promise<Client>{
        return this.clientRepository.createClient(createClientDto);
    }

    //PUT
    async updateClient(id: number, createClientDto: CreateClientDto) :  Promise<Client>{
        return this.clientRepository.updateClient(id, createClientDto);
    }

    //DELETE
    async deleteClient(id: number) : Promise<Client>{
        return this.clientRepository.deleteClientById(id);
    }

}
