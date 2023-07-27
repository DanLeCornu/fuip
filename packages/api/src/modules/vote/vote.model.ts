import * as Prisma from "@prisma/client"
import { Field, ObjectType } from "type-graphql"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class Vote extends BaseModel implements Prisma.Vote {
  @Field()
  ip: string

  @Field()
  deviceId: string

  @Field()
  postId: string
}
