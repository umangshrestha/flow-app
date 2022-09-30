import { check } from "express-validator";
import isNotNaN from "./custom/nan";
import isNotNull from "./custom/null";
import { offsetSanitizer } from "./offset";

export const topicSanitizer = [
    ...offsetSanitizer,
    check("id").optional().toInt().custom(isNotNaN),
    check("topic").optional().custom(isNotNull)
]

