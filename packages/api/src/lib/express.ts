import { Request, Response } from "express"

import { User } from "../modules/user/user.model"

export interface ExpressRequest extends Request {
  auth?: { id: string }
  currentUser?: User
}

export interface ExpressContext {
  req: ExpressRequest
  res: Response
}
