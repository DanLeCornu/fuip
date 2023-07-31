import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"

import { UNKNOWN } from "../../lib/helpers"
import { prisma } from "../../lib/prisma"
import { ResolverContext } from "../shared/resolverContext"
import { MyVotesResponse } from "./responses/myVotes.response"
import { Vote } from "./vote.model"

@Service()
@Resolver(() => Vote)
export default class VoteResolver {
  @Query(() => [MyVotesResponse])
  async myVotes(@Arg("deviceId") deviceId: string, @Ctx() ctx: ResolverContext): Promise<MyVotesResponse[]> {
    return await prisma.vote.findMany({
      where: { deviceId, skip: false },
      select: { postId: true },
    })
  }

  @Mutation(() => Boolean)
  async createVote(
    @Arg("postId") postId: string,
    @Arg("deviceId") deviceId: string,
    @Arg("skip") skip: boolean,
  ): Promise<boolean> {
    const skippedVote = await prisma.vote.findFirst({ where: { deviceId, postId, skip: true } })
    if (skippedVote && skip === false) {
      await prisma.vote.update({ where: { id: skippedVote.id }, data: { skip: false } })
    } else {
      try {
        await prisma.vote.create({
          data: {
            deviceId: deviceId || UNKNOWN,
            postId,
            skip: !!skip,
          },
        })
      } catch (e) {
        console.log(e)
        throw new Error("Vote unique constraint failed")
      }
    }
    return true
  }
}
