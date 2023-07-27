import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
const NODE_ENV = process.env.NODE_ENV || "development"

Sentry.init({
  dsn: SENTRY_DSN || "",
  tracesSampleRate: 2.0,
  enabled: NODE_ENV === "production",
})
