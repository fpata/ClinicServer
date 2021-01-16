import User from "../entities/user.entity";
import { Repository, createConnection } from "typeorm";

export default class DBConnection {

    public static getRepo(entity: any):any {
        createConnection({
            type: "sqlite",
            // host: "localhost",
            // port: 3306,
            // username: "root",
            // password: "Apple@110",
            database: "../database/Clinic.db",
            entities: [User]
        }).then(value => {
            if (!value.isConnected)
                value.connect().then(success => {
                    console.log("connected");
                }).then(fail => { "connection failed" });
           return value.getRepository(entity);
        }).catch(err => {
            console.log(err);
        });

    }
}