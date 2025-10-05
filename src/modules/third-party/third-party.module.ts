import { Module } from '@nestjs/common';
import { ThirdPartyService } from './service/third-party.service';

@Module({
  providers: [ThirdPartyService],
  exports: [ThirdPartyService],
})
export class ThirdPartyModule {}
