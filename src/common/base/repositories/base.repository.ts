import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
  SaveOptions,
} from 'typeorm';
import { IDatabaseOptions } from './IDatabaseOptions';

export class BaseRepository<E> {
  protected repo: Repository<E>;
  public entityColumns: string[];
  public entityName: string;

  constructor(repository: Repository<E>) {
    this.repo = repository;
    this.entityName = this.repo.metadata.name;
    this.entityColumns = this.repo.metadata.columns.map((prop) => {
      return prop.propertyName;
    });
  }

  get root() {
    return this.repo;
  }

  protected get alias(): string {
    return this.repo.metadata.targetName;
  }

  private throwBadRequestException(msg?: unknown): BadRequestException {
    throw new BadRequestException(msg);
  }

  private throwNotFoundException(name: string): NotFoundException {
    throw new NotFoundException(`${name} not found`);
  }

  public checkFieldExistInEntity(field) {
    if (!this.entityColumns.includes(field)) {
      return false;
      this.throwBadRequestException(
        `${field} doesn't exist in ${this.entityName}`,
      );
    }
    return true;
  }

  async createOne(data: E | DeepPartial<E>): Promise<E> {
    return this.repo.save(data);
  }

  save(data: any | DeepPartial<E>): Promise<E> {
    return this.repo.save(data);
  }

  saveAll(data: any[], options?: SaveOptions): Promise<E[]> {
    return this.repo.save(data, options);
  }

  async createMany(array: E[], options?: SaveOptions): Promise<E[]> {
    return this.repo.save(array, options);
  }

  getAllNoPaginate(find: FindManyOptions<E>) {
    return this.repo.find(find);
  }

  async getOne(
    find: FindOptionsWhere<E>,
    options?: IDatabaseOptions<E>,
  ): Promise<E> {
    return this.repo.findOne({
      where: {
        ...find,
      },
      withDeleted: options && options.withDeleted,
    });
  }

  //   async getMany(
  //     request: IPageRequest &
  //       ISearchRequest &
  //       ISortRequest &
  //       IFilterDateRequest &
  //       IFilterFieldRequest &
  //       IFilterOrdRequest &
  //       IIncludesRequest,
  //     options?: IDatabaseOptions<E>,
  //     relation?: string[],
  //   ): Promise<IPageResponse<E>> {
  //     const {
  //       page,
  //       pageSize,
  //       search,
  //       dateFrom,
  //       dateTo,
  //       filter,
  //       or,
  //       searchOr,
  //       includes,
  //     } = request;
  //     let sort = request.sort;
  //     let newPageSize: number;
  //     let newPage: number;
  //     newPageSize = pageSize && +pageSize;
  //     newPage = page && +page;
  //     if (!pageSize) {
  //       newPageSize = 0;
  //     } else if (+pageSize <= 0) {
  //       newPageSize = 10;
  //     }
  //     if (!page || +page <= 0) {
  //       newPage = 1;
  //     }

  //     const builder = this.repo_DB_READ.createQueryBuilder(this.alias);
  //     if (options && options.withDeleted) builder.withDeleted();
  //     if (relation) {
  //       relation.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         builder.leftJoinAndSelect(key, value);
  //       });
  //     }

  //     if (filter) {
  //       const mapFilter = new Map<string, string[]>();
  //       filter.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         if (mapFilter.has(key)) {
  //           mapFilter.set(key, [...mapFilter.get(key), value]);
  //         } else {
  //           mapFilter.set(key, [value]);
  //         }
  //       });
  //       mapFilter.forEach((value, key) => {
  //         const uniqueParamName = `${key}Values`;
  //         builder.andWhere(`${this.alias}.${key} IN (:...${uniqueParamName})`, {
  //           [uniqueParamName]: value,
  //         });
  //       });
  //     }

  //     if (search) {
  //       search.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         this.checkFieldExistInEntity(key);
  //         builder.andWhere(`${this.alias}.${key} LIKE '%${value}%'`);
  //       });
  //     }
  //     if (searchOr) {
  //       builder.andWhere(
  //         new Brackets((qb) => {
  //           searchOr.forEach((item) => {
  //             const [key, value] = item.split(/=(.*)/);
  //             this.checkFieldExistInEntity(key);
  //             qb.orWhere(`${this.alias}.${key} LIKE '%${value}%'`);
  //           });
  //         }),
  //       );
  //     }
  //     if (includes) {
  //       includes.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         this.checkFieldExistInEntity(key);
  //         builder.andWhere(`${this.alias}.${key} IN(:...includes)`, {
  //           includes: value.split(','),
  //         });
  //       });
  //     }
  //     if (isDateString(dateFrom) && isDateString(dateTo)) {
  //       const from = dayjs(dateFrom).toDate();
  //       const to = dayjs(dateTo).toDate();
  //       builder.andWhere({
  //         createdAt: Between(from, to),
  //       });
  //     } else if (isDateString(dateFrom)) {
  //       const from = dayjs(new Date(dateFrom)).toDate();
  //       builder.andWhere({
  //         createdAt: MoreThanOrEqual(from),
  //       });
  //     } else if (isDateString(dateTo)) {
  //       const to = dayjs(new Date(dateTo)).toDate();
  //       builder.andWhere({
  //         createdAt: LessThanOrEqual(to),
  //       });
  //     }

  //     if (or) {
  //       or.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         this.checkFieldExistInEntity(key);
  //         builder.orWhere(`${this.alias}.${key} = '${value}'`);
  //       });
  //     }
  //     if (!sort) {
  //       sort = ['created_at=DESC', 'id=DESC', 'createdAt=DESC'];
  //     }
  //     if (sort) {
  //       sort.forEach((item) => {
  //         const [key, value] = item.split(/=(.*)/);
  //         const is_valid = this.checkFieldExistInEntity(key);
  //         const sortValue = this.getSortValue(value);
  //         if (sortValue && is_valid) {
  //           builder.addOrderBy(`${this.alias}.${key}`, sortValue);
  //         }
  //       });
  //     }
  //     if (+newPage && !isNaN(+newPage)) {
  //       builder
  //         .take(+newPageSize)
  //         .skip(calculatePageOffset(+newPage, +newPageSize));
  //       const [data, total] = <[E[], number]>await builder.getManyAndCount();
  //       return new PageResponseResult(data, total, +newPageSize, +newPage);
  //     } else {
  //       const data = await builder.getMany();
  //       return {
  //         data: data,
  //         meta: {
  //           pageSize: null,
  //           page: null,
  //           totalItem: null,
  //           totalPage: null,
  //         },
  //       };
  //     }
  //   }

  async updateOne(find: FindOptionsWhere<E>, data: any): Promise<boolean> {
    const result = await this.repo.update(find, data);
    return result.affected === 1;
  }

  async updateMany(find: FindOptionsWhere<E>, data: any): Promise<void> {
    await this.repo.update(find, data);
  }

  async deleteOne(find: FindOptionsWhere<E>): Promise<boolean> {
    const result = await this.repo.delete(find);
    return result.affected === 1;
  }

  clearData() {
    return this.repo.clear();
  }

  async softDeleteOne(find: any): Promise<boolean> {
    const result = await this.repo.softDelete(find);
    return result.affected === 1;
  }

  async recoverOne(find: any): Promise<boolean> {
    const result = await this.repo.restore(find);
    return result.affected === 1;
  }

  async createToSave(data: E): Promise<DeepPartial<E>[] | DeepPartial<E>> {
    return await this.repo.create(data);
  }

  async findOne(find: FindManyOptions<E>): Promise<E> {
    return this.repo.findOne(find);
  }
}
