import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity } from 'typeorm'

import { BaseEntityWithPrimary } from './util'

@Entity()
export class SearchHistory extends BaseEntityWithPrimary<SearchHistory> {
  @ApiProperty()
  @Column()
  query: string
}
