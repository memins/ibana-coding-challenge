import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SearchHistory } from '@ibana/backend-interfaces/entity-typeorm/searchHistory.entity'

interface SearchParams {
  q: string
  offset: number
  limit: number
  apiKey: string
}

@Injectable()
export class SearchService {
  constructor (@InjectRepository(SearchHistory) private seachHistoryRepository: Repository<SearchHistory>, private readonly httpService: HttpService) {}

  private logger = new Logger(this.constructor.name)

  async search ({ q, offset, limit, apiKey }: SearchParams): Promise<any> {
    const url = `https://api.giphy.com/v1/gifs/search?q=${q}&offset=${offset}&limit=${limit}&api_key=${apiKey}`

    const result = await this.httpService.get(url).toPromise()

    return result.data
  }

  async storeSearchQuery (query: string): Promise<void> {
    await this.seachHistoryRepository.save({
      query
    })
  }
}
