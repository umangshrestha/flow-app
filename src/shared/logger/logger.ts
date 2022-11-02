
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';


const LogLevel = (process.env.NODE_ENV === 'production') ? 'info' : 'silly';
const DateTimeFormat  = { format: 'YYYY-MM-DD HH:mm:ss' };


const transports = {
    console: new winston.transports.Console({
        level: LogLevel,
        format: winston.format.combine(
            winston.format.timestamp(DateTimeFormat),
            winston.format.colorize({
                colors: {
                    info: 'blue',
                    debug: 'yellow',
                    error: 'red',
                },
            }),
            winston.format.printf((info) => {
                return `[${info.timestamp}] [${info.level}] [${info.context ? info.context : info.stack
                    }] [${info.message}]`;
            }),
        ),
    }),
    combinedFile: new winstonDailyRotateFile({
        dirname: 'logs',
        filename: 'combined',
        extension: '.log',
        level: LogLevel,
    }),
    errorFile: new winstonDailyRotateFile({
        dirname: 'logs',
        filename: 'error',
        extension: '.log',
        level: 'error',
    }),
};

export const LoggerModule = WinstonModule.createLogger({
    exitOnError: false,
    format: winston.format.combine(
        winston.format.timestamp(DateTimeFormat),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports: [
        transports.console,
        transports.combinedFile,
        transports.errorFile,
    ],
})