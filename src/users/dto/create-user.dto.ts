import {IsEmail, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @ApiProperty({type: String,description: "name"})
    readonly name: string;

    @IsString()
    @ApiProperty({type: String,description: "avatar"})
    readonly avatar: string;

    @IsString()
    @ApiProperty({type: String,description: "avatarId"})
    readonly avatarId: string;

    @IsString()
    @ApiProperty({type: String,description: "surname"})
    readonly surname: string;

    @IsEmail()
    @ApiProperty({type: String,description: "email"})
    readonly email: string;

    @IsString()
    @ApiProperty({type: String,description: "language"})
    readonly language: string;

    @IsString()
    @ApiProperty({type: String,description: "job"})
    readonly job: string;

    @IsString()
    @ApiProperty({type: String,description: "company"})
    readonly company: string;

    @IsString()
    @ApiProperty({type: String,description: "password"})
    readonly password: string;

    @IsString()
    @ApiProperty({type: String,description: "level"})
    readonly level: string;

    @IsString()
    @ApiProperty({type: Boolean,description: "subscribe"})
    readonly subscribe: boolean;

    @IsString()
    @ApiProperty({type: String,description: "role"})
    readonly role: string;
}