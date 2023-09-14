import { Body, Controller } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { SearchService } from './search.service'

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor (private readonly service: SearchService) {}

  @ApiOperation({
    summary: 'Create Organization',
    description: 'Create a new organization with a management user'
  })
  // define api operation here
  storeSearchQuery (@Body() body: any): Promise<void> {

    return null
  }
}

