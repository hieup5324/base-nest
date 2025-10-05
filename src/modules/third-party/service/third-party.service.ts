import { Injectable } from '@nestjs/common';
import { OtpFactory } from '../otp.factory';
import { SEND_OTP_TYPE } from 'src/common/shared/enums/sort.enum';

@Injectable()
export class ThirdPartyService {

  async sendOtp(phone: string, provider: SEND_OTP_TYPE): Promise<void> {
    //test code
    const otp_code = "gen code" 
    const otp_provider = OtpFactory.build(provider);
    await otp_provider.sendOtp(phone, otp_code);
  }
}
