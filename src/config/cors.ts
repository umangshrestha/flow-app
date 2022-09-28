import cors from "cors";
import { ALLOWED_ORIGIN } from "./settings";

export const CORS_OPTIONS: cors.CorsOptions = {
    origin: ALLOWED_ORIGIN
};