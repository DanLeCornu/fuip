import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Service } from "typedi"

import { prisma } from "../../lib/prisma"
import { ResolverContext } from "../shared/resolverContext"
import { Vote } from "./vote.model"
import { getIp, UNKNOWN } from "../../lib/helpers"
import { MyVotesResponse } from "./responses/myVotes.response"

@Service()
@Resolver(() => Vote)
export default class VoteResolver {
  @Query(() => [MyVotesResponse])
  async myVotes(@Arg("deviceId") deviceId: string, @Ctx() ctx: ResolverContext): Promise<MyVotesResponse[]> {
    return await prisma.vote.findMany({
      where: { deviceId, ip: getIp(ctx) },
      select: { postId: true },
    })
  }

  @Mutation(() => Boolean)
  async createVote(
    @Arg("postId") postId: string,
    @Arg("deviceId") deviceId: string,
    @Arg("skip", { nullable: true }) skip: boolean,
    @Ctx() ctx: ResolverContext,
  ): Promise<boolean> {
    try {
      await prisma.vote.create({
        data: {
          ip: getIp(ctx),
          deviceId: deviceId || UNKNOWN,
          postId,
          skip: !!skip,
        },
      })
    } catch (e) {
      console.log(e)
      throw new Error("Vote unique constraint failed")
    }
    return true
  }
}
