const { join } = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')
const { default: tsconfigLoader } = require('tsconfig-loader')

const TS_CONFIG_PATH = 'tsconfig.spec.json'

module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  testRegex: '(/tests/.*|/src/.*).(e2e-)?spec.ts$',
  globals: {
    'ts-jest': {
      tsconfig: join('<rootDir>', TS_CONFIG_PATH)
    }
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfigLoader({ cwd: process.cwd(), filename: TS_CONFIG_PATH }).tsConfig.compilerOptions.paths, {
    prefix: '<rootDir>/../../'
  })
}
