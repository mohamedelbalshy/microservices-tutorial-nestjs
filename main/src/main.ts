import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  // });
  // await app.listen(8001);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://rloshegc:FIXpgfiTtN6usmeokWPghy681IYXQ5Hk@snake.rmq2.cloudamqp.com/rloshegc',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen(() => {
    console.log('Microservice is listening');
  });
}
bootstrap();
