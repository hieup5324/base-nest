import { FindManyOptions, FindOptionsWhere } from 'typeorm';
import { BaseRepository } from '../repositories/base.repository';
import { CustomException } from 'src/common/shared/exceptions/custom.exception';
import { HttpStatus } from '@nestjs/common';
import { ErrorCode, ErrorMessage } from 'src/constants/error.constant';

export class BaseService<E> {
  constructor(protected readonly repo: BaseRepository<E>) {}

  createOne(dto: any): Promise<E> {
    return this.repo.createOne(dto);
  }

  //   getAll() {
  //     return this.repo.getMany({});
  //   }

  async getAllNoPaginate(find: FindManyOptions<E> = {}) {
    return this.repo.getAllNoPaginate(find);
  }

  async getOneById(id: string | number) {
    const data = await this.repo.getOne({
      id,
    } as unknown as FindOptionsWhere<E>);
    if (!data) {
      throw new CustomException(HttpStatus.NOT_FOUND, {
        code: ErrorCode.NOT_FOUND,
        message: this.repo.entityName + ' ' + ErrorMessage.NOT_FOUND,
      });
    }
    return data;
  }
}
