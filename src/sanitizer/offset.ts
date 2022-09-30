import { query } from "express-validator";
import isNotNaN from "./custom/nan";

export const offsetSanitizer = [
    query("limit").optional().toInt().custom(isNotNaN),
    query("offset").optional().toInt().custom(isNotNaN),
]