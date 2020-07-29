import {IsEmail, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SignInDto {

    @IsEmail()
    @ApiProperty({type: String,description: "email"})
     email: string;

    @IsString()
    @ApiProperty({type: String,description: "password"})
     password: string;
}