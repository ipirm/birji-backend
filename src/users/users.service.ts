import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
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

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    }


    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(createUserDto.password, salt)
        const createdUser = new this.userModel(_.assignIn(createUserDto, {password: hash}))
        return await createdUser.save();
    }

    async find(id: string): Promise<IUser> {
        return await this.userModel.findById(id).exec();
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return null;
        }
        const valid = await bcrypt.compare(password, user.password);
        return valid ? user : null;
    }
}