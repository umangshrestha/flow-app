import { query, check } from "express-validator";

export const facultySanitizer = [

    query("offset").optional().toInt(),
    query("limit").optional().toInt(),
    check("email").optional().isEmail()
]
