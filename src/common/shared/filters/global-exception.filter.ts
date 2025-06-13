import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
// import { NestLibOptions } from '../../common.module';
// import { getI18nContextFromArgumentsHost } from 'nestjs-i18n';
import { CustomLogger } from '../loggers/custom-logger.util';
import { MODULE_OPTION_KEY } from '../constants/common.constants';
import { IResponseError } from '../interfaces/IResponseError';
import { CustomExceptionFilter } from './custom-exception.filter';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new CustomLogger(GlobalExceptionFilter.name);

  constructor(@Inject(MODULE_OPTION_KEY) private options: any) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = this.options.errorMessages.internalErrorMessage;
    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      const errorResponse = exception.getResponse();
      message = (errorResponse as any)?.message;
      if (Array.isArray(message)) {
        const policyError = [];
        message.forEach((ms) => {
          if (ms.includes('data.other') || ms.includes('data.primary')) {
            if (!policyError.includes('Thông số bảng giá phải là số nguyên')) {
              policyError.push('Thông số bảng giá phải là số nguyên');
            }
          } else {
            policyError.push(ms);
          }
        });
        message = policyError as any;
      }
    }
    if (exception instanceof CustomExceptionFilter) {
      return exception;
    }

    this.logger.error({ message: exception.message, stack: exception.stack });

    if (this.options.useI18nOnFilter) {
      try {
        // const i18n = getI18nContextFromArgumentsHost(host);
        // message = i18n.t(message, {
        //   args: exception.args || {},
        // });
      } catch (ex: any) {
        this.logger.error({ message: 'Translation error', stack: ex.stack });
      }
    }

    const errorBody: IResponseError = {
      error: {
        code: statusCode,
        message: message,
      },
      statusCode: statusCode,
      timestamp: new Date().toISOString(),
    };

    response.status(statusCode).json(errorBody);
  }
}
