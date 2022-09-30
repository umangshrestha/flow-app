import { query, check } from "express-validator";
import isNotNaN from "./custom/nan";
import isNotNull from "./custom/null";

export const topicSanitizer = [
    query("offset").optional().toInt().custom(isNotNaN),
    query("limit").optional().toInt().custom(isNotNaN),
    check("id").optional().toInt().custom(isNotNaN),
    check("topic").optional().custom(isNotNull)
]

