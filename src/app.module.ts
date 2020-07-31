import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static'; // New
import {join} from 'path'; // New

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client/dist')}),
        AuthModule,
        UsersModule,
        MongooseModule.forRoot('mongodb+srv://admin:2587889e@cluster0.0uly1.mongodb.net/root?retryWrites=true&w=majority'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

