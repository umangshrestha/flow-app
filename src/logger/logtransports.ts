import { transports } from "winston"
import { LOG_FILE, LOG_FOLDER } from "@config/settings"

let TRANSPORTS_OPTION: (transports.FileTransportInstance | transports.ConsoleTransportInstance)[] = []

TRANSPORTS_OPTION.push(
    new transports.File({
        dirname: LOG_FOLDER,
        filename: LOG_FILE,
    }))

if (process.env.NODE_ENV === "development")
    TRANSPORTS_OPTION.push(new transports.Console())

export default TRANSPORTS_OPTION;