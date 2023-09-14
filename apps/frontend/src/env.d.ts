// / <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_ROOT: string
  VITE_BASE_PATH: string
  VITE_BASE_URL: string
  VITE_SSO_REDIRECT_URL: string
  VITE_AWS_CLOUDFRONT_URL: string
  // set by vite
  BASE_URL: string
}

interface ImportMeta {
  readonly hot: any
  readonly env: ImportMetaEnv
}

