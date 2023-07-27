import { FieldResolver, Resolver, Root } from "type-graphql"
import { Service } from "typedi"
import { S3_URL } from "../../lib/config"
import { prisma } from "../../lib/prisma"

import { UseCacheControl } from "../shared/middleware/UseCacheControl"
import { VotesResponse } from "../vote/responses/votes.response"
import { Post } from "./post.model"

@Service()
@Resolver(() => Post)
export default class PostFieldResolver {
  @UseCacheControl({ maxAge: 3600 })
  @FieldResolver(() => String, { nullable: true })
  image(@Root() post: Post) {
    if (!post.image) return null
    if (post.image.startsWith("http")) return post.image
    return S3_URL + post.image
  }

  @FieldResolver(() => VotesResponse)
  async votes(@Root() post: Post) {
    const items = await prisma.post.findUnique({ where: { id: post.id } }).votes({ select: { id: true } })
    if (!items) return { items: [], count: 0 }
    return { items, count: items.length }
  }

  @FieldResolver(() => Number)
  async voteCount(@Root() post: Post) {
    return (await prisma.post.findUnique({ where: { id: post.id } }).votes({ select: { id: true } }))?.length
  }
}
