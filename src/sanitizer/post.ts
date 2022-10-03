import { check } from "express-validator";
import { offsetSanitizer } from "./offset";

export const postSanitizer = [
    ...offsetSanitizer,
    check("email").optional().isEmail(),
]
