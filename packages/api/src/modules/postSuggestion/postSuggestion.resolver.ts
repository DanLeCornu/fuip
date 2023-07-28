import { Arg, Ctx, Mutation, Resolver } from "type-graphql"
import { Inject, Service } from "typedi"

import { prisma } from "../../lib/prisma"
import { ResolverContext } from "../shared/resolverContext"
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
    const postSuggestions = await prisma.postSuggestion.findMany({
      where: { deviceId, createdAt: { gte: dayjs().utcOffset(0).startOf("day").toDate() } },
    })
    if (postSuggestions.length > 0) throw new Error("Too many suggestions")
    await prisma.postSuggestion.create({ data: { title, deviceId } })
    void this.postMailer.sendSuggestedPost(title, deviceId)
    return true
  }
}
