import { ClientRepository } from './client.repository';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    findAll(): Promise<Client[]>;
    getById(id: number): Promise<Client>;
    createClient(createClientDto: CreateClientDto): Promise<Client>;
    updateClient(id: number, createClientDto: CreateClientDto): Promise<Client>;
    deleteClient(id: number): Promise<Client>;
}
