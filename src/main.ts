import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true, 
    }),
  );

  app.enableCors();
  //await app.listen(process.env.PORT || 3000);
  await app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
    console.log("esta funcionando correctamente");
});
}
bootstrap();
