import * as Prisma from "@prisma/client"
import { PostType } from "@prisma/client"
import { Field, ObjectType } from "type-graphql"

import { BaseModel } from "../shared/base.model"

@ObjectType()
export class Post extends BaseModel implements Prisma.Post {
  @Field()
  title: string

  @Field(() => String)
  type: PostType

  image: string | null
}
