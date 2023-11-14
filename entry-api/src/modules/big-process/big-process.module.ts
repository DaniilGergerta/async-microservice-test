import { Module } from '@nestjs/common';
import { BigProcessService } from './big-process.service';
import { BigProcessController } from './big-process.controller';

@Module({
  providers: [BigProcessService],
  controllers: [BigProcessController],
})
export class BigProcessModule {}
