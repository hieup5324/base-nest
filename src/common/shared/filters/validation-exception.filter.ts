import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ValidationFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Trường hợp lỗi validate số điện thoại
    const message =
      exception instanceof BadRequestException
        ? (exception.getResponse() as any)?.message?.[0]
        : exception?.message;

    if (
      message === 'to_phone must be longer than or equal to 10 characters' ||
      message === 'phone must be longer than or equal to 10 characters' ||
      message === 'to_phone must be shorter than or equal to 10 characters' ||
      message === 'phone must be shorter than or equal to 10 characters'
    ) {
      return response.status(HttpStatus.OK).send({
        success: false,
        msg: 'Số điện thoại không hợp lệ.',
      });
    }

    // Trả về lỗi mặc định
    return response.status(status).send({
      success: false,
      msg: message || 'Lỗi không xác định',
    });
  }
}
