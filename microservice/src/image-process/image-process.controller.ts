import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ImageProcessService } from '@src/image-process/image-process.service';
import Patterns from '@shared/enums/patterns';
import { IImagePayload } from '@shared/types/payloads';
import { IImageData } from '@shared/types/image-data';

@Controller()
export class ImageProcessController {
  constructor(private readonly imageProcessService: ImageProcessService) {}

  @EventPattern(Patterns.Image.PROCESS)
  async process(data: IImagePayload): Promise<IImageData> {
    return this.imageProcessService.processImage(data);
  }

  @EventPattern(Patterns.Image.STATUS)
  status(data: IImagePayload): IImageData {
    return this.imageProcessService.getStatus(data);
  }
}
