import { ApiProperty } from '@nestjs/swagger'
import { BaseEntity as TypeOrmBaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class BaseEntity<T> extends TypeOrmBaseEntity {
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    readOnly: true
  })
  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt?: Date

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    readOnly: true
  })
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt?: Date

  @ApiProperty({ type: 'number', readOnly: true })
  @VersionColumn()
    version?: number
}

export abstract class BaseEntityWithPrimary<T> extends BaseEntity<T> {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    readOnly: true
  })
  @PrimaryGeneratedColumn('uuid')
    id?: string
}
