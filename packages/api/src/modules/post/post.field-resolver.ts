import { FieldResolver, Resolver, Root } from "type-graphql"
import { Service } from "typedi"
import { prisma } from "../../lib/prisma"

import { VotesResponse } from "../vote/responses/votes.response"
import { Post } from "./post.model"

@Service()
@Resolver(() => Post)
export default class PostFieldResolver {
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
