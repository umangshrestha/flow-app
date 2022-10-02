import { body, check, param } from "express-validator";
import isNotNaN from "./custom/nan";
import { offsetSanitizer } from "./offset";

export const GetValidator = [
    ...offsetSanitizer,
    check("id").optional().toInt().custom(isNotNaN),
    check("topic").optional().isString()
]

export const IdValidator = [
    param("id").exists().toInt().custom(isNotNaN),
]

export const PostValidator = [
    body("topic").isString(),  
]

export const PutValidator = [
    param("id").notEmpty().toInt().custom(isNotNaN),
    ...PostValidator,
]