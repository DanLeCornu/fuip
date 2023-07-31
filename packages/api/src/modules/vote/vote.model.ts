import { Field, ObjectType } from "type-graphql"

import * as Prisma from "@fuip/database"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class Vote extends BaseModel implements Prisma.Vote {
  @Field()
  deviceId: string

  @Field()
  postId: string

  @Field()
  skip: boolean
}
