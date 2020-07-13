import { Client } from "./client.entity"
import { Repository, Entity, EntityRepository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client>{

    async getClient(): Promise<Client[]>{
        const querry = this.createQueryBuilder('Client');
        return await querry.getMany();
    }

    async getById(id: number): Promise<Client>{
        const query = this.createQueryBuilder("Client")            
        .where("client.id = id", { id: id });
        
        return await query.getOne();      
    }

    async createClient(createClientDto: CreateClientDto): Promise<Client>{
        const client = new Client();
        client.id = createClientDto.id;
        client.name = createClientDto.name;
        client.age = createClientDto.age;
        client.cpf = createClientDto.cpf;
        client.phone = createClientDto.phone;
        await client.save();
        return client;
    }

    async updateClient(idClient: number, createClientDto: CreateClientDto): Promise<Client>{
        const query = this.createQueryBuilder("Client")
        .update(createClientDto)
        .where("id = :id", {id: idClient});

        await query.execute();
        return this.getById(idClient);
    }

    async deleteClientById(idClient: number): Promise<Client>{
        const query = this.createQueryBuilder("Client")
        .delete()
        .where("id = :id", {id: idClient});

        await query.execute()
        return this.getById(idClient);
    }
}