import { DocumentBuilder } from '@nestjs/swagger';

export const buildSwaggerDocument = () =>
  new DocumentBuilder()
    .setTitle('Microservice API')
    .setDescription('API for Microservices')
    .setVersion('1.0')
    .build();
