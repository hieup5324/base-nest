export interface IOtpProvider {
  sendOtp(phone: string, otp_code: string): Promise<void>;
}