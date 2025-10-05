import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OtpProviderType } from '../../../third-party/otp.interface';

export class SendOtpDto {
  @ApiProperty({
    example: '0123456789',
    description: 'Phone number to send OTP to',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'SMS',
    enum: OtpProviderType,
    description: 'OTP provider type (SMS or ZALO_ZNS)',
    required: false,
  })
  @IsEnum(OtpProviderType)
  @IsOptional()
  provider?: OtpProviderType;
}
