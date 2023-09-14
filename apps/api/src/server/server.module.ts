
import type { MiddlewareConsumer, NestModule } from '@nestjs/common'
import { Module, RequestMethod } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import * as modules from './modules'
import { getDatabaseOptions } from '@ibana/backend-interfaces/database'
import {
  BadRequestExceptionFilter,
  ConfigService,
  ExtendedValidationPipe,
  GlobalSentryExceptionFilter,
  MaintenanceMiddleware,
  MaintenanceModule,
  SetApiInfoHeaderMiddleware,
  setEnvironmentVariables
} from '@webundsoehne/nestjs-util'
import { InternalModule, RequestProfilerInterceptor } from '@webundsoehne/nestjs-util-restful'

export function createServerModule (mock = false): new (mock: boolean) => NestModule {
  @Module({
    providers: [
      ConfigService,
      {
        provide: APP_FILTER,
        useClass: GlobalSentryExceptionFilter
      },
      {
        provide: APP_FILTER,
        useClass: BadRequestExceptionFilter
      },
      {
        provide: APP_PIPE,
        useClass: ExtendedValidationPipe
      },
      {
        provide: APP_INTERCEPTOR,
        useClass: RequestProfilerInterceptor
      }
    ],
    imports: [...Object.values(modules), TypeOrmModule.forRoot(getDatabaseOptions(mock)), InternalModule, MaintenanceModule]
  })
  class ServerModule implements NestModule {
    async configure (consumer: MiddlewareConsumer): Promise<void> {
      await setEnvironmentVariables()

      consumer.apply(MaintenanceMiddleware, SetApiInfoHeaderMiddleware).forRoutes({
        path: '(.*)',
        method: RequestMethod.ALL
      })
    }
  }

  return ServerModule
}
