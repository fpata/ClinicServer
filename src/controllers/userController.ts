import { BaseController } from "./baseController";
import { Repository } from "typeorm";
import UserRepository from "../dataAccess/userRepository";

export default class UserController extends BaseController
{
  private path:string = "/user";
  private userRepository:UserRepository;

  constructor() {
    super("/user",new UserRepository());
  }
}