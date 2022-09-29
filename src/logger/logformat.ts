import { format } from "winston";
import { formattedDateTime } from "@utils/datetime";

export default format.combine(
    format.colorize(),
    format.timestamp({
        format: formattedDateTime()
    }),
    format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })
)