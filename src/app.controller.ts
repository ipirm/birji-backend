import {Controller, Get, Request,Param, Post,Patch, UseGuards, Query} from '@nestjs/common';
import {JwtAuthGuard} from './auth/jwt-auth.guard';
import {AuthService} from './auth/auth.service';
import {UsersService} from './users/users.service';
import {ApiBody, ApiOkResponse} from "@nestjs/swagger";
import {SignInDto} from "./users/dto/sign-in.dto";
import {CreateUserDto} from "./users/dto/create-user.dto";

@Controller()
export class AppController {
    constructor(private authService: AuthService, private usersService: UsersService) {
    }

    @ApiOkResponse({description: '"access_token": "token"'})
    @ApiBody({type: SignInDto})
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.signIn(req.body);
    }

    @ApiOkResponse({description: 'true'})
    @ApiBody({type: CreateUserDto})
    @Post('auth/signup')
    async signUp(@Request() req) {
        return this.authService.signUp(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @ApiOkResponse({description: '"name": "example Name","email":"example-email,"role": "user" or "admin'})
    @Get('auth/profile')
    async getProfile(@Request() req) {
        return req.user;
    }

    @ApiOkResponse({type: Array})
    @Get('users')
    getUsers(@Query() query) {
        return this.usersService.findAllByChannelIdPaginated(query.page,query.per_page);
    }

    @ApiOkResponse({ type: CreateUserDto})
    @Get('/user/:id')
    async getUser(@Param() param) {
        return this.usersService.getUser(param.id)
    }
    @ApiOkResponse({ description:'true'})
    @Post('/user')
    async deleteUser(@Request() req) {
        return this.usersService.deleteUser(req.body.id)
    }
@Patch('/user/update')
async updateUser(@Request() req) {
    return this.usersService.updateUser(req.body)
}
}