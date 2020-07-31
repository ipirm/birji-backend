import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    const options = new DocumentBuilder()
        .setTitle('Login API')
        .setDescription('The login API description')
        .setVersion('1.0')
        .addTag('Login')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}

bootstrap();
