import { Arg, Args, Query, Resolver } from "type-graphql"
import { Inject, Service } from "typedi"

import { FindFirstPostArgs, FindManyPostArgs } from "@fuip/database/dist/generated"

import { prisma } from "../../lib/prisma"
import { Post } from "./post.model"
import { PostsResponse } from "./responses/posts.response"
import { PostMailer } from "./post.mailer"

@Service()
@Resolver(() => Post)
export default class PostResolver {
  @Inject(() => PostMailer)
  postMailer: PostMailer

  @Query(() => Post, { nullable: true })
  async post(@Args() args: FindFirstPostArgs): Promise<Post | null> {
    return await prisma.post.findFirst(args as any)
  }

  @Query(() => Post, { nullable: true })
  async randomPost(@Args() args: FindManyPostArgs, @Arg("deviceId") deviceId: string): Promise<Post | null> {
    const voteCount = await prisma.vote.count({ where: { deviceId } })
    const allPostsCount = await prisma.post.count()

    if (voteCount === allPostsCount) throw new Error("All posts voted on")

    const posts = await prisma.post.findMany({
      ...(args as any),
      where: { votes: { none: { deviceId } } },
    })
    let randomIndex = Math.floor(Math.random() * posts.length) - 1
    if (randomIndex < 0) {
      randomIndex = 0
    } else if (randomIndex > posts.length - 1) {
      randomIndex = posts.length - 1
    }
    return posts[randomIndex]
  }

  @Query(() => PostsResponse)
  async posts(@Args() args: FindManyPostArgs): Promise<PostsResponse> {
    const items = await prisma.post.findMany(args as any)
    const count = await prisma.post.count({ ...(args as any), take: undefined, skip: undefined })
    return { items, count }
  }
}
