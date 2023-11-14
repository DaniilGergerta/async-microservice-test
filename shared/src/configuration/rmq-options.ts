import { RmqOptions, Transport } from "@nestjs/microservices";
import { EnvService } from "../modules/env/env.service";

export const getRmqOptions = (envService: EnvService): RmqOptions => {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [
        {
          username: envService.get("RABBITMQ_USER"),
          password: envService.get("RABBITMQ_PASS"),
          hostname: envService.get("RABBITMQ_HOST"),
          port: envService.get("RABBITMQ_PORT"),
        },
      ],
      queue: envService.get("RABBITMQ_QUEUE"),
      persistent: true,
    },
  };
};
