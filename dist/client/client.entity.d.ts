import { BaseEntity } from "typeorm";
export declare class Client extends BaseEntity {
    id: number;
    name: string;
    age: number;
    cpf: string;
    phone: string;
}
