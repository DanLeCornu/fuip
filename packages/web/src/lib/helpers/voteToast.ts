import { PostType } from "lib/static/postType"
import { randomFromArray } from "./utils"

export const voteSuccessToast = (title: string) => {
  const messages = [
    `You told ${title} to go fuck themselves!`,
    `${title} got fucked!`,
    `Yeah, fuck ${title}!`,
    `Fuck you ${title}!`,
    `Go fuck yourself ${title}!`,
    `Fuck ${title}!`,
  ]
  return randomFromArray(messages)
}
