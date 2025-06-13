import {
  CreateDateColumn,
  DeleteDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { IBaseEntity } from './IBaseEntity';

// @Entity()
export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Index()
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}

// @Entity()
export class BaseEntityIdNumber {
  @PrimaryGeneratedColumn()
  id?: any;

  @Index()
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
