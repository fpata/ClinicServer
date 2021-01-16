import User from "../entities/user.entity";
import BaseRepository from "./baseRepository";

export default class UserRepository extends BaseRepository
{
    constructor(){
        super(User);
    }
}