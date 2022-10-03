import { Request, NextFunction, Response } from "express"
import { validationResult } from "express-validator"

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty())
      return next()

  const extractedErrors: string[] = errors.array().map(err => `${err.param}:${err.msg }`);

  return res.status(400).json({
    name: "SanitizationError",
    errors: extractedErrors,
  })
}