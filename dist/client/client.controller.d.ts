import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    getClient(): Promise<Client[]>;
    getClientById(id: number): Promise<Client>;
    createClient(createClientDto: CreateClientDto): Promise<Client>;
    updateClient(id: number, createClientDto: CreateClientDto): Promise<Client>;
    deleteClient(id: number): Promise<Client>;
}
