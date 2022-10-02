import { Request, NextFunction, Response } from "express"
import { validationResult } from "express-validator"

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
      return next()
  }

  const extractedErrors: { [x: string]: any }[] = []
  errors.array().forEach(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(400).json({
    error: "sanitizer error",
    errors: extractedErrors,
  })
}