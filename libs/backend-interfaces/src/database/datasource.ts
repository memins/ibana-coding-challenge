import type { DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

import * as entities from '../entity'
import { ConfigService } from '@webundsoehne/nestjs-util'

const { mock: mockOptions = {}, ...options } = ConfigService.get('database')

const databaseOptions: DataSourceOptions = {
  ...options,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [...Object.values(entities)],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  cli: {
    entitiesDir: `${__dirname}/entity-typeorm`,
    migrationsDir: `${__dirname}/migrations`
  }
}

export function getDatabaseOptions (mock = false): DataSourceOptions {
  return mock ? { ...databaseOptions, ...mockOptions } : databaseOptions
}
