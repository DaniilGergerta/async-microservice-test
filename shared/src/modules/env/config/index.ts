import { ConfigModuleOptions } from "@nestjs/config";
import type { IDefaultEnv } from "../types";
import * as Joi from "joi";

const DEFAULT_ENV_VALIDATION: Joi.StrictSchemaMap<IDefaultEnv> = {
  BACKEND_PORT: Joi.number().port().required(),
  RABBITMQ_USER: Joi.string().required(),
  RABBITMQ_PASS: Joi.string().required(),
  RABBITMQ_HOST: Joi.string().required(),
  RABBITMQ_PORT: Joi.number().port().required(),
  RABBITMQ_QUEUE: Joi.string().required(),
};

export const getConfigModuleOptions = (): ConfigModuleOptions => ({
  isGlobal: true,
  cache: true,
  envFilePath: ["../dev.env"],
  validationSchema: Joi.object(DEFAULT_ENV_VALIDATION),
});
