import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("User")
export default class User {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Age: number;
}
