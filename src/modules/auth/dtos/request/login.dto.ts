import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'example@domain.com',
  })
  @IsString()
  email: string;

  password?: string;

  @ApiProperty()
  @IsBoolean()
  type_source: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  device?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ip?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  hash_password?: string;
}

export class LoginByPhoneDto {
  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsString()
  otp: string;
}
