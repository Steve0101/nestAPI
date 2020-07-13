import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Animal extends BaseEntity{
    @PrimaryColumn() 
    id: number;
 
    @Column() 
    name: string; 
    
    @Column()
    breed: string; 
}