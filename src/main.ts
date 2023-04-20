import { join } from 'node:path'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'team',
        protoPath: join(__dirname, './teams/team.proto')
      },
    },
  );
  await app.listen()
}

bootstrap();
