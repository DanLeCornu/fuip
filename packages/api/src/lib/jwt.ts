import jwt from "jsonwebtoken"

import { APP_AUTH_SECRET, APP_REFRESH_SECRET, APP_SECRET } from "./config"

type Payload = Record<string, any>

export const createToken = (payload: Payload, options?: jwt.SignOptions): string => {
  try {
    const token = jwt.sign(payload, APP_SECRET, {
      issuer: "@fuip/api",
      audience: ["@fuip/web"],
      expiresIn: "4w",
      ...options,
    })
    return token
  } catch (error) {
    // Oops
    throw error
  }
}

export function decodeToken<T>(token: string): T {
  try {
    jwt.verify(token, APP_SECRET)
    const payload = jwt.decode(token)
    return payload as T
  } catch (error) {
    // Oops
    throw error
  }
}

export const createAuthToken = (payload: Payload): string => {
  try {
    const token = jwt.sign(payload, APP_AUTH_SECRET, {
      issuer: "@fuip/api",
      audience: ["@fuip/web"],
      expiresIn: "20 mins",
    })
    return token
  } catch (error) {
    // Oops
    throw error
  }
}

export const createRefreshToken = (payload: Payload): string => {
  try {
    const token = jwt.sign(payload, APP_REFRESH_SECRET, {
      issuer: "@fuip/api",
      audience: ["@fuip/app", "@fuip/web"],
      expiresIn: "8 weeks",
    })
    return token
  } catch (error) {
    // Oops
    throw error
  }
}

export function decodeRefreshToken<T>(token: string): T {
  try {
    jwt.verify(token, APP_REFRESH_SECRET)
    const payload = jwt.decode(token)
    return payload as T
  } catch (error) {
    // Oops
    throw error
  }
}
