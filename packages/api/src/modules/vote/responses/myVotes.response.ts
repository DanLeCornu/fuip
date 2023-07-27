import { Field, ObjectType } from "type-graphql"

import { Vote } from "../vote.model"

@ObjectType()
export class MyVotesResponse implements Partial<Vote> {
  @Field()
  postId: string
}
