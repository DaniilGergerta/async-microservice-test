import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RMQ_TOKEN } from '@src/modules/rmq/rmq.module';
import { Observable } from 'rxjs';
import { IImagePayload } from '@shared/types/payloads';
import { IImageData } from '@shared/types/image-data';
import Patterns from '@shared/enums/patterns';

@Injectable()
export class BigProcessService {
  constructor(@Inject(RMQ_TOKEN) private readonly client: ClientProxy) {}

  private getImagePayload(): IImagePayload {
    return { reference_id: Date.now() };
  }

  sendSync(): Observable<IImageData> {
    return this.client.send<IImageData>(
      Patterns.Image.PROCESS,
      this.getImagePayload(),
    );
  }

  sendAsync(): Observable<IImageData> {
    const payload = this.getImagePayload();
    this.client.emit<IImageData>(Patterns.Image.PROCESS, payload);
    return this.client.send(Patterns.Image.STATUS, payload);
  }

  getStatus(id: number): Observable<IImageData> {
    return this.client.send<IImageData, IImagePayload>(Patterns.Image.STATUS, {
      reference_id: id,
    });
  }
}
