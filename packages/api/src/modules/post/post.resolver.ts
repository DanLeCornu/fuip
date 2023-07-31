import { Arg, Args, Query, Resolver } from "type-graphql"
import { Inject, Service } from "typedi"

import { FindFirstPostArgs, FindManyPostArgs } from "@fuip/database/dist/generated"

import { random } from "../../lib/helpers"
import { prisma } from "../../lib/prisma"
import { PostMailer } from "./post.mailer"
import { Post } from "./post.model"
import { PostsResponse } from "./responses/posts.response"

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
    return random(posts)
  }

  @Query(() => PostsResponse)
  async posts(@Args() args: FindManyPostArgs): Promise<PostsResponse> {
    const items: Post[] = await prisma.$queryRaw`
      SELECT p.id, p.title, p.image
      FROM "Post" p
      LEFT JOIN "Vote" v ON p.id = v."postId" AND v.skip = FALSE
      GROUP BY p.id
      ORDER BY COUNT(v.id) DESC
      LIMIT ${args.take} OFFSET ${args.skip}
    `
    const count = await prisma.post.count({ ...(args as any), take: undefined, skip: undefined })
    return { items, count }
  }
}
