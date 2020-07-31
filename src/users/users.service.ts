import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {PaginateModel } from "mongoose";
import {IUser} from "./interfaces/user.interface";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import * as _ from "lodash";
import {SignInDto} from "./dto/sign-in.dto";
import {IUserRead} from "./interfaces/userRead.interface";

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor(@InjectModel('User') private readonly userModel: PaginateModel<IUser>) {
    }


    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDto.password, salt)
        const createdUser = new this.userModel(_.assignIn(createUserDto, {password: hash}))
        return await createdUser.save();
    }

    async find(createUserDto: CreateUserDto): Promise<any> {
        const email = createUserDto.email
        const user = await this.userModel.findOne({ email });
        if(user){
            return true
        }
        return false
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return null;
        }
        const valid = await bcrypt.compare(password, user.password);
        return valid ? user : null;
    }
    async deleteUser(id: string): Promise<any>{
         await this.userModel.findByIdAndDelete(id);
        return true
    }
    async findAllByChannelIdPaginated(page: string, limit: string) {
        const options = {
            populate: [
                // Your foreign key fields to populate
            ],
            page: Number(page),
            limit: Number(limit),
        };
        // Get the data from database
        return await this.userModel.paginate({}, options);
    }
    async getUser(id: string):Promise<any>{
        const data = await this.userModel.findById(id);
        return data
    }
}