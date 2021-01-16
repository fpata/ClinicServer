import * as express from "express";
import { Repository } from "typeorm";
import BaseRepository from "../dataAccess/baseRepository";

export abstract class BaseController
{
    public router = express.Router();
    public basepath = "/";
    public repository:BaseRepository;

    constructor(basePath:string, repos:BaseRepository)
    {
        this.basepath = basePath;
        this.intializeRoutes();
        this.repository= repos;
    }

    public intializeRoutes() {
        this.router.get(this.basepath, this.getAll);
        this.router.get(this.basepath + "/:Id", this.getById);
        this.router.post(this.basepath, this.create);
        this.router.put(this.basepath, this.update);
        this.router.delete(this.basepath+ "/:Id", this.delete);
      }

    public getAll(request: express.Request, response: express.Response):void
    {
      response.send("Get All called");
      response.send(this.repository.getAll());
      response.end();
    }

    public getById(request: express.Request, response: express.Response):void
    {
        response.send("Get By Id called");
        response.send(this.repository.getById(parseInt(request.params.Id,10)));
        response.end();
    }

    public create(request: express.Request, response: express.Response):void
    {
        response.send("Create called");
        response.send(this.repository.insert(request.body));
        response.end();
    }

    public update(request: express.Request, response: express.Response):void
    {
        response.send("Update called");
        response.send(this.repository.update(request.body));
        response.end();
    }

    public delete(request: express.Request, response: express.Response):void
    {
        response.send("Get By Id called");
        response.send(this.repository.delete(parseInt(request.params.Id, 10)));
        response.end();
    }
}