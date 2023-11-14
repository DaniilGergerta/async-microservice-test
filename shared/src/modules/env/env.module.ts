import { ConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";
import { EnvService } from "./env.service";
import { getConfigModuleOptions } from "./config";

@Global()
@Module({
  imports: [ConfigModule.forRoot(getConfigModuleOptions())],
  providers: [EnvService],
  exports: [ConfigModule, EnvService],
})
export class EnvModule extends ConfigModule {}
