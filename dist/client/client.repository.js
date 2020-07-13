"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const client_entity_1 = require("./client.entity");
const typeorm_1 = require("typeorm");
let ClientRepository = class ClientRepository extends typeorm_1.Repository {
    async getClient() {
        const querry = this.createQueryBuilder('Client');
        return await querry.getMany();
    }
    async getById(id) {
        const query = this.createQueryBuilder("Client")
            .where("client.id = id", { id: id });
        return await query.getOne();
    }
    async createClient(createClientDto) {
        const client = new client_entity_1.Client();
        client.id = createClientDto.id;
        client.name = createClientDto.name;
        client.age = createClientDto.age;
        client.cpf = createClientDto.cpf;
        client.phone = createClientDto.phone;
        await client.save();
        return client;
    }
    async updateClient(idClient, createClientDto) {
        const query = this.createQueryBuilder("Client")
            .update(createClientDto)
            .where("id = :id", { id: idClient });
        await query.execute();
        return this.getById(idClient);
    }
    async deleteClientById(idClient) {
        const query = this.createQueryBuilder("Client")
            .delete()
            .where("id = :id", { id: idClient });
        await query.execute();
        return this.getById(idClient);
    }
};
ClientRepository = __decorate([
    typeorm_1.EntityRepository(client_entity_1.Client)
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map