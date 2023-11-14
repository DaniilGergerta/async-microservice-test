import { Global, Inject, Module, OnModuleInit, Provider } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { getRmqOptions } from './config';
import { EnvService } from '@shared/modules/env/env.service';

export const RMQ_TOKEN = 'RMQ_TOKEN';

const RMQ_PROVIDER: Provider = {
  provide: RMQ_TOKEN,
  inject: [EnvService],
  useFactory: (envService: EnvService) =>
    ClientProxyFactory.create(getRmqOptions(envService)),
};

@Global()
@Module({
  providers: [RMQ_PROVIDER],
  exports: [RMQ_PROVIDER],
})
export class RmqModule implements OnModuleInit {
  constructor(@Inject(RMQ_TOKEN) private readonly client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
  }
}
