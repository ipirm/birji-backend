import {Controller, Get, Request, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from './auth/jwt-auth.guard';
import {AuthService} from './auth/auth.service';
import {ApiBody, ApiCreatedResponse, ApiOkResponse} from "@nestjs/swagger";
import {SignInDto} from "./users/dto/sign-in.dto";
import {CreateUserDto} from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(private authService: AuthService) {
    }

    @ApiOkResponse({description: '"access_token": "token"'})
    @ApiBody({type: SignInDto })
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.signIn(req.body);
    }
    @ApiOkResponse({description: 'true'})
    @ApiBody({type: CreateUserDto })
    @Post('auth/signup')
    async signUp(@Request() req) {
        return this.authService.signUp(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({description: '"name": "example Name","email":"example-email,"role": "user" or "admin'})
    @Get('auth/profile')
    getProfile(@Request() req) {
        return req.user;
    }
}