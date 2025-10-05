import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/request/register.dto';
import { SendOtpDto } from './dtos/request/send-otp.dto';
import { VerifyOtpDto } from './dtos/request/verify-otp.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('send-otp')
  async sendOtp(@Body() dto: SendOtpDto) {
    return await this.service.sendOtp(dto);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return await this.service.doRegister(dto);
  }
}
