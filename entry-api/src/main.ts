import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { EnvService } from '@shared/modules/env/env.service';
import { buildSwaggerDocument } from '@src/common/config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);

  const document = SwaggerModule.createDocument(app, buildSwaggerDocument());
  SwaggerModule.setup('api', app, document);

  await app.listen(envService.get('BACKEND_PORT'));
}
void bootstrap();
