import {Body, Injectable, ValidationPipe, UnauthorizedException, HttpException } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {SignInDto} from "../users/dto/sign-in.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {
    }

    async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
        if (await this.usersService.find(createUserDto)) {
            throw new HttpException ('Email exists', 409);
        } else {
            await this.usersService.create(createUserDto);
            return await this.usersService.find(createUserDto)
        }
    }

    async signIn(@Body(ValidationPipe) signInDto: SignInDto): Promise<any> {

        const user = await this.usersService.validateUser(signInDto.email, signInDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = {name: user.name, role: user.role, email: user.email};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async signAdminIn(@Body(ValidationPipe) signInDto: SignInDto): Promise<any> {

        const user = await this.usersService.validateUser(signInDto.email, signInDto.password);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        if(user.role !== 'admin'){
            throw new UnauthorizedException('Not admin');
        }
        const payload = {name: user.name, role: user.role, email: user.email};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}