import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

process.env.NODE_CONFIG_DIR = './apps/frontend/config'

// TODO prod build
export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg|riv)$/,
  base: getBasePath(),
  resolve: {
    alias: {
      '@assets/': `${path.resolve(__dirname, './src/assets')}/`,
      '@app/': `${path.resolve(__dirname, './src/app')}/`,
      '@public/': `${path.resolve(__dirname, './src/public')}/`,
      '@ibana/interfaces': `${path.resolve(__dirname, '../../libs/interfaces/src')}/`
    }
  },
  publicDir: path.resolve(__dirname, './src/public'),
  plugins: [
    Vue(),
    Components({
      dirs: ['src/app/components', 'src/app/layouts', 'src/app/pages']
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'Dockerfile',
          dest: '.'
        },
        {
          src: '.dockerignore',
          dest: '.'
        }
      ]
    })
  ]
})

function getBasePath() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = require('config')
  const basePath = config.get('basePath')
  const baseUrl = config.get('baseUrl')
  const apiUrl = config.get('apiUrl')

  // set env vars from config
  process.env.VITE_BASE_PATH = basePath
  process.env.VITE_API_ROOT = apiUrl
  process.env.VITE_BASE_URL = baseUrl

  const appBaseUrl = `${baseUrl ?? ''}${basePath ?? '/'}`

  // eslint-disable-next-line no-console
  console.log('CONFIG:', config.util.toObject())
  // eslint-disable-next-line no-console
  console.log('BASE:', appBaseUrl)

  return appBaseUrl
}
