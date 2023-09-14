import { BadRequestException, Injectable, Logger } from '@nestjs/common'

@Injectable()
export class SearchService {
  private logger = new Logger(this.constructor.name)

  async storeSearchQuery(body: any): Promise<any> {
    this.logger.log(`Storing search query ${body.organization.name}`)
  }
}
