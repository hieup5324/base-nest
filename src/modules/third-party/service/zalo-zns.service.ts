import { Injectable } from '@nestjs/common';
import { IOtpProvider } from '../otp.interface';

@Injectable()
export class ZaloZnsService implements IOtpProvider {
  async sendOtp(phone: string, otp_code: string): Promise<void> {
    // logic handle
  }
}
