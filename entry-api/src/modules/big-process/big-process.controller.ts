import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BigProcessService } from './big-process.service';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { IImageData } from '@shared/types/image-data';

@ApiTags('Big Process')
@Controller('big-process')
export class BigProcessController {
  constructor(private readonly bigProcessService: BigProcessService) {}

  @Get('sync')
  runSync(): Observable<IImageData> {
    return this.bigProcessService.sendSync();
  }

  @Get('async')
  runAsync(): Observable<IImageData> {
    return this.bigProcessService.sendAsync();
  }

  @Get('status/:id')
  getStatus(@Param('id', ParseIntPipe) id: number): Observable<IImageData> {
    return this.bigProcessService.getStatus(id);
  }
}
