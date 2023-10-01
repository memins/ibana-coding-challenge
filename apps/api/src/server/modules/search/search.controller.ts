import { Query, Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger'

import { SearchService } from './search.service'

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor (private readonly service: SearchService, private config: ConfigService) {}

  @ApiOperation({
    summary: 'Search gifs with a query'
  })
  @ApiQuery({
    name: 'q'
  })
  @ApiQuery({
    name: 'limit'
  })
  @ApiQuery({
    name: 'offset'
  })
  @Get('/')
  // define api operation here
  async search (@Query('q') q: string, @Query('limit') limit: number, @Query('offset') offset: number): Promise<any> {
    const results = await this.service.search({
      q,
      limit,
      offset,
      apiKey: this.config.get<string>('API_KEY')
    })

    this.service.storeSearchQuery(q).catch((e) => {
      console.log('error on save query', e)
    })

    return {
      ...results
    }
  }
}
