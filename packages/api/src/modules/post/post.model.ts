import { Field, ObjectType } from "type-graphql"

import * as Prisma from "@fuip/database"
import { PostType } from "@fuip/database/dist/generated"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class Post extends BaseModel implements Prisma.Post {
  @Field()
  title: string

  @Field(() => PostType)
  type: Prisma.PostType

  @Field(() => String, { nullable: true })
  image: string | null
}
