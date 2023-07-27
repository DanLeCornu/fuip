import { Arg, Ctx, Mutation, Resolver } from "type-graphql"
import { Inject, Service } from "typedi"

import { prisma } from "../../lib/prisma"
import { ResolverContext } from "../shared/resolverContext"
import { getIp } from "../../lib/helpers"
import { PostMailer } from "../post/post.mailer"
import { PostSuggestion } from "./postSuggestion.model"
import dayjs from "dayjs"

import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

@Service()
@Resolver(() => PostSuggestion)
export default class PostSuggestionResolver {
  @Inject(() => PostMailer)
  postMailer: PostMailer

  @Mutation(() => Boolean)
  async createPostSuggestion(
    @Arg("title") title: string,
    @Arg("deviceId") deviceId: string,
    @Ctx() ctx: ResolverContext,
  ): Promise<boolean> {
    const ip = getIp(ctx)
    const postSuggestions = await prisma.postSuggestion.findMany({
      where: { ip, deviceId, createdAt: { gte: dayjs().utcOffset(0).startOf("day").toDate() } },
    })
    if (postSuggestions.length > 0) throw new Error("Too many suggestions")
    await prisma.postSuggestion.create({ data: { title, ip, deviceId } })
    this.postMailer.sendSuggestedPost(title, ip, deviceId)
    return true
  }
}
