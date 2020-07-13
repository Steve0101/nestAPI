import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Client extends BaseEntity{
    @PrimaryColumn() 
    id: number;
    
    @Column()
    name: string; 
    
    @Column()
    age: number;   

    @Column()
    cpf: string; 

    @Column()
    phone: string;  
}