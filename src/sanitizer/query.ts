import { check } from "express-validator";
import { offsetSanitizer } from "./offset";

export const querySanitizer = [
    ...offsetSanitizer,
    check("email").optional().isEmail(),
]
