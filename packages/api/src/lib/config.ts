// ENV VARIABLES
export const {
  NODE_ENV = "development",
  APP_ENV = "development",
  APP_SECRET = "APP_SECRET",
  APOLLO_KEY = "APOLLO_KEY",
  APP_AUTH_SECRET = "APP_AUTH_SECRET",
  APP_REFRESH_SECRET = "APP_REFRESH_SECRET",
  SENTRY_DSN = "SENTRY_DSN",
  SENDGRID_API_KEY = "SENDGRID_API_KEY",
  PORT = 5555,
  DATABASE_URL = "",
  WEB_URL = "localhost:3000",
  REDIS_URL = "",
} = process.env

// IS PRODUCTION
export const IS_PRODUCTION = APP_ENV === "production"
export const IS_STAGING = APP_ENV === "staging"
export const IS_DEV = APP_ENV === "development"

// CONTROLLER PATHS
export const CONTROLLER_PATHS = "/modules/**/*controller.{js,ts}"

// WEB URL
export const FULL_WEB_URL = `${IS_PRODUCTION ? "https://" : "http://"}${WEB_URL}`
