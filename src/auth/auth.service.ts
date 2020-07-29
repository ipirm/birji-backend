import {Body, Injectable, ValidationPipe,UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {IUser} from "../users/interfaces/user.interface";
import {SignInDto} from "../users/dto/sign-in.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
        await this.usersService.create(createUserDto);
        return true
    }

    async signIn(@Body(ValidationPipe) signInDto: SignInDto): Promise<any> {

        const user = await this.usersService.validateUser(signInDto.email, signInDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = {name: user.name,role: user.role,email: user.email};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}