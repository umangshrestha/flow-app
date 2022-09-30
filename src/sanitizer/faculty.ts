import { query, check } from "express-validator";
import isNotNaN from "./custom/nan";

export const facultySanitizer = [
    query("id").optional().custom((x: string) => {
        throw new Error("did you mean uwinID?");
    }),
    query("offset").optional().toInt().custom(isNotNaN),
    query("limit").optional().toInt().custom(isNotNaN),
    check("email").optional().isEmail()
]