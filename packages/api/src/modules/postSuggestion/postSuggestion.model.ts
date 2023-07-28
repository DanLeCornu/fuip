import * as Prisma from "@fuip/database"
import { Field, ObjectType } from "type-graphql"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class PostSuggestion extends BaseModel implements Prisma.PostSuggestion {
  @Field()
  title: string

  @Field()
  ip: string

  @Field()
  deviceId: string
}
