import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Value extends BaseEntity{
    @PrimaryColumn() 
    id: number;

    @Column() 
    heigth: number;  
    
    @Column()
    weigth: number; 

    @Column()
    age: number;  

}