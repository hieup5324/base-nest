import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyOtpDto {
  @ApiProperty({
    example: '0123456789',
    description: 'Phone number to verify',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '123456',
    description: 'OTP code to verify',
  })
  @IsString()
  @IsNotEmpty()
  otpCode: string;
}
