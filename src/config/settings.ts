import dotenv from "dotenv";

dotenv.config();

export const PORT = (process.env.PORT || 8000) as number;
export const IP = process.env.IP || "localhost"; 
export const TAG = process.env.npm_package_version;
export const NAME = process.env.npm_package_name;
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

const NODE_ENV = process.env.NODE_ENV || "development";
export const IS_DEVELOPMENT = (NODE_ENV === "development"); 
