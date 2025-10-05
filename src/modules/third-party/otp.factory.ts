import { SEND_OTP_TYPE } from 'src/common/shared/enums/sort.enum';
import { IOtpProvider } from './otp.interface';
import { SmsService } from './service/sms.service';
import { ZaloZnsService } from './service/zalo-zns.service';

export class OtpFactory {
  static build(type: SEND_OTP_TYPE): IOtpProvider {
    switch (type) {
      case SEND_OTP_TYPE.SMS:
        return new SmsService();
      case SEND_OTP_TYPE.ZALO:
        return new ZaloZnsService();
      default:
        return new SmsService();
    }
  }
}
