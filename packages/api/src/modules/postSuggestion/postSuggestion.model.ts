import { Field, ObjectType } from "type-graphql"

import * as Prisma from "@fuip/database"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class PostSuggestion extends BaseModel implements Prisma.PostSuggestion {
  @Field()
  title: string

  @Field()
  deviceId: string
}
