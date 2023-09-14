import * as process from 'process'

export function getPackageVersion (): string {
  return process.env.PACKAGE_VERSION ?? process.env.npm_package_version
}

export function getPackageName (): string {
  return process.env.PACKAGE_NAME ?? process.env.npm_package_name
}
