import * as Prisma from "@fuip/database"
import { Field, ObjectType } from "type-graphql"

import { Role } from "@fuip/database/dist/generated"

import { BaseModel } from "../shared/base.model"
import { UseIsCurrentUser } from "./middleware/UseIsCurrentUser"

@ObjectType()
export class User extends BaseModel implements Prisma.User {
  @UseIsCurrentUser()
  @Field()
  email: string

  password: string

  // @Field()
  // firstName: string

  // @Field()
  // lastName: string

  // @Field(() => String, { nullable: true })
  // bio: string | null

  @Field(() => Role)
  role: Prisma.Role

  // avatar: string | null
}
