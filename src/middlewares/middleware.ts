import { Request, Response, NextFunction } from "express"

export function middleware(request: Request, response: Response, next: NextFunction) {
  request.user_id = "123456"

  return next()
}
