import { createApplication as createServerApplication } from './server/init'
import { getPackageName, getPackageVersion } from './util'

function bootstrap (): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(`++++ ${getPackageName()} v${getPackageVersion()} starting on nodejs ${process.version}, environment is "${process.env.NODE_ENV}" ++++`)

  return createServerApplication()
}

void bootstrap()
