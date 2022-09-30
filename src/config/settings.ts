import dotenv from "dotenv";

dotenv.config();

// expresss
export const PORT = (process.env.PORT || 8000) as number;
export const IP = process.env.IP || "localhost";
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

// logging
process.env.NODE_ENV ||= "development";
export const LOG_FOLDER = `logs/${process.env.NODE_ENV}`;
export const LOG_FILE = `flow_app_${new Date().toLocaleString()}.log`;
export const LOG_NAME = `${process.env.npm_package_name}:${process.env.npm_package_version}`;
export const LOG_LEVEL = (process.env.NODE_ENV === "development") ? "silly" : "info";

