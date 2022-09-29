import TRANSPORTS_OPTION from "./logtransports";
import { LOG_LEVEL, LOG_NAME } from "@config/settings";
import { createLogger, format, LeveledLogMethod } from "winston";
import logformat from "./logformat";


const logger = createLogger({
    level: LOG_LEVEL,
    transports: TRANSPORTS_OPTION,
    format: logformat,
    defaultMeta: { service: LOG_NAME }
});


// https://github.com/winstonjs/winston/issues/1427
const wrapper = (original: LeveledLogMethod) => {
    return (...args: any) => original(args.join(" "));
};

logger.error = wrapper(logger.error);
logger.warn = wrapper(logger.warn);
logger.info = wrapper(logger.info);
logger.verbose = wrapper(logger.verbose);
logger.debug = wrapper(logger.debug);
logger.silly = wrapper(logger.silly);


export default logger;