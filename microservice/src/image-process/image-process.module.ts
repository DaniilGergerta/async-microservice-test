import { Module } from '@nestjs/common';
import { ImageProcessController } from '@src/image-process/image-process.controller';
import { ImageProcessService } from '@src/image-process/image-process.service';

@Module({
  controllers: [ImageProcessController],
  providers: [ImageProcessService],
})
export class ImageProcessModule {}
