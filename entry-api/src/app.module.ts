import { Module } from '@nestjs/common';
import { EnvModule } from '@shared/modules/env/env.module';
import { BigProcessModule } from '@src/modules/big-process/big-process.module';
import { RmqModule } from '@src/modules/rmq/rmq.module';

@Module({
  imports: [EnvModule, RmqModule, BigProcessModule],
})
export class AppModule {}
