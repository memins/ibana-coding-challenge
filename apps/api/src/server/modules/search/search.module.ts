import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SearchController } from './search.controller'
import { SearchService } from './search.service'
import { SearchHistory } from '@ibana/backend-interfaces/entity-typeorm/searchHistory.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SearchHistory]), ConfigModule, HttpModule],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
