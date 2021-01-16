import  dotenv from "dotenv";
import UserController  from "./controllers/userController";
import ClinicApp from './clinicApp';

// initialize configuration
dotenv.config();
const PORT: number = parseInt(process.env.SERVER_PORT as string, 10);

/*
 * Server Activation with controller
 * */
const app = new  ClinicApp(
    [new UserController()],
    9000);
app.listen();
