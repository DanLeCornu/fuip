import { ObjectType } from "type-graphql"

import { ConnectionResponse } from "../../shared/response/connection.response"
import { Vote } from "../vote.model"

@ObjectType()
export class VotesResponse extends ConnectionResponse(() => [Vote]) {}
