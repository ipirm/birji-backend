import  {Document} from "mongoose";



export interface IUserRead extends Document{
    readonly name: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly surname: string;
    readonly email: string;
    readonly language: string;
    readonly job: string;
    readonly company: string;
    readonly level: string;
    readonly subscribe: boolean;
    readonly role: string;
}