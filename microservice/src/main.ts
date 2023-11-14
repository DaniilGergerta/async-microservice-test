import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { EnvService } from '@shared/modules/env/env.service';
import { getRmqOptions } from '@shared/configuration/rmq-options';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const envService = app.get<EnvService>(EnvService);

  app.connectMicroservice<RmqOptions>(getRmqOptions(envService));

  await app.startAllMicroservices();
}
void bootstrap();
