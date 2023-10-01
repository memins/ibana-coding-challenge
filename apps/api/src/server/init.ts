import fastifyCookie from '@fastify/cookie'
import { NestFactory } from '@nestjs/core'
import type { NestFastifyApplication } from '@nestjs/platform-fastify'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { contentParser } from 'fastify-multer'
import * as process from 'process'

import { createServerModule } from './server.module'
import { ConfigService, LoggerService } from '@webundsoehne/nestjs-util'

export async function createApplication (): Promise<void> {
  // nail timezone to utc
  process.env.TZ = 'UTC'

  const app = await NestFactory.create<NestFastifyApplication>(createServerModule(), new FastifyAdapter(), {
    logger: new LoggerService(),
    cors: {
      origin: ConfigService.get('frontend.baseUrl'),
      credentials: true
    }
  })

  await app.register(contentParser)
  await app.register(fastifyCookie)

  const port: number = ConfigService.get('port') ?? 3000
  const prefix: string = ConfigService.get('url.apiPath') ?? ''

  // helmet

  app.setGlobalPrefix(prefix)

  if (process.env.NODE_ENV === 'develop') {
    const config = new DocumentBuilder().setTitle('IBANA Challenge API').setVersion('1.0').build()
    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)
  }

  await app.listen(port, '0.0.0.0')
}
