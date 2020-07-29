import  * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    avatar: {type: String, required: false, default: null},
    avatarId: {type: String, required: false, default: null},
    surname: {type: String, required: false},
    email: {type: 'String', required: true,unique: true},
    language: {type: String, required: false},
    job: {type: String, required: false},
    company: {type: String, required: false},
    password: {type: String, required: true},
    level: {type: String, required: false},
    subscribe: {type: Boolean, required: false},
    role: {type: String, required: true, default: 'user'}
})