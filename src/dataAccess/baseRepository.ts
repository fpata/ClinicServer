
import { Repository, createConnection } from "typeorm";
import DBConnection from "./dbConnection";

export default class BaseRepository {
    private repository: Repository<any>;
    private entity: any;

    constructor(entity: any) {
        this.entity = entity;
        // this.dbConnection = new dbConnection();
        this.repository = DBConnection.getRepo(entity);
    }

    public getAll(): any {
        const result = this.repository.find(this.entity);
        return result;
    }

    public getById(Id: number): any {
        const result = this.repository.find({
            where: { "id": Id }
        });
        return result;
    }

    public insert(model: any): any {
        const result = this.repository.insert(model);
        return result;
    }

    public update(model: any): any {
        const result = this.repository.update(model.id, model);
        return result;
    }

    public delete(Id: number): any {
        const result = this.repository.delete(Id);
        return result;
    }
}




