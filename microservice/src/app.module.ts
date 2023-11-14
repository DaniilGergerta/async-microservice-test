import { Module } from '@nestjs/common';
import { EnvModule } from '@shared/modules/env/env.module';
import { ImageProcessModule } from '@src/image-process/image-process.module';

@Module({
  imports: [EnvModule, ImageProcessModule],
})
export class AppModule {}
