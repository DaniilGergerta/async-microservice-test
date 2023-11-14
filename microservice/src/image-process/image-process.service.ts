import { Injectable } from '@nestjs/common';
import { IImageData } from '@shared/types/image-data';
import { IImagePayload } from '@shared/types/payloads';
import { EProcessStatus } from '@shared/enums';

@Injectable()
export class ImageProcessService {
  private processes: IImageData[] = [];

  async processImage(data: IImagePayload): Promise<IImageData> {
    const process: IImageData = {
      reference_id: data.reference_id,
      status: EProcessStatus.QUEUED,
    };

    this.processes.push(process);

    await new Promise<void>((resolve) => {
      process.status = EProcessStatus.IN_PROGRESS;
      setTimeout(() => {
        process.status = EProcessStatus.COMPLETED;
        resolve();
      }, 10_000);
    });

    return process;
  }

  getStatus(data: IImagePayload): IImageData | undefined {
    return this.processes.find(
      (process) => process.reference_id === data.reference_id,
    );
  }
}
