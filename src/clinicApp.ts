import express from 'express';
import * as bodyParser from 'body-parser';
import cors from "cors";
import helmet from "helmet";

export default class ClinicApp {
  public app: express.Application;
  public port: number;

  constructor(controllers:any, port:number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

/**
 *  App Configuration
 */

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers:any) {
    controllers.forEach((controller:any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
