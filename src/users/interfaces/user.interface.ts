import  {Document} from "mongoose";


export interface IUser extends Document{
    readonly name: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly surname: string;
    readonly email: string;
    readonly language: string;
    readonly job: string;
    readonly company: string;
    readonly password: string;
    readonly level: string;
    readonly subscribe: boolean;
    readonly role: string;
}