import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { RegisterDto } from './dtos/request/register.dto';
import { SendOtpDto } from './dtos/request/send-otp.dto';
import { VerifyOtpDto } from './dtos/request/verify-otp.dto';
import { ThirdPartyService } from '../third-party/service/third-party.service';
import { SEND_OTP_TYPE } from 'src/common/shared/enums/sort.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly otpService: ThirdPartyService,
  ) {}

  // Gửi OTP xác thực số điện thoại
  async sendOtp(dto: SendOtpDto) {
    const { phone, provider } = dto;
    const provider_sender = provider || SEND_OTP_TYPE.SMS;
    await this.otpService.sendOtp(phone, provider);
    return { message: 'Đã gửi OTP thành công' };
  }


  // Đăng ký user
  async doRegister(dto: RegisterDto) {
    // const user = await this.userRepo.create(dto);
    // return { message: 'Đăng ký thành công', userId: user.id };
  }
}
