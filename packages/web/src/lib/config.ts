export const IS_PRODUCTION = process.env.NEXT_PUBLIC_APP_ENV === "production"
export const IS_STAGING = process.env.NEXT_PUBLIC_APP_ENV === "staging"

export const IS_DEV = !IS_STAGING && !IS_PRODUCTION

export const SENTRY_DSN =
  "https://834d1ce46681462ebbf9f24bfdf2388e@o4505602731540480.ingest.sentry.io/4505602734882816"

// const STAGING_URL = process.env.VERCEL_GIT_PULL_REQUEST_NUMBER
//   ? `https://api-fuip-pr-${process.env.VERCEL_GIT_PULL_REQUEST_NUMBER}.up.railway.app`
//   : "https://staging.api.fuip.app"

export const API_URL = IS_PRODUCTION
  ? "https://api.fuip.app"
  : IS_STAGING
  ? "https://staging.api.fuip.app"
  : "http://localhost:5555"

export const GRAPHQL_API_URL = API_URL + "/graphql"

const hostname = typeof window !== "undefined" && window?.location?.hostname

export const WEB_URL = IS_DEV ? `http://localhost:3000` : `https://${hostname}`

export const ACCESS_TOKEN = "fuip.access.token"
export const REFRESH_TOKEN = "fuip.refresh.token"

export const REFRESH_TOKEN_KEY = "refreshToken"
