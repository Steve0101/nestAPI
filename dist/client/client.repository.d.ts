import { Client } from "./client.entity";
import { Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";
export declare class ClientRepository extends Repository<Client> {
    getClient(): Promise<Client[]>;
    getById(id: number): Promise<Client>;
    createClient(createClientDto: CreateClientDto): Promise<Client>;
    updateClient(idClient: number, createClientDto: CreateClientDto): Promise<Client>;
    deleteClientById(idClient: number): Promise<Client>;
}
