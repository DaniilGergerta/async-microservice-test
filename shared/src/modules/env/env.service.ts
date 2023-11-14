import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDefaultEnv } from './types';

@Injectable()
export class EnvService extends ConfigService<IDefaultEnv, true> {}
