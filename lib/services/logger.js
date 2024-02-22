"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const config_1 = require("../config");
const pino_1 = require("pino");
const lumberjackGRPCService_1 = require("./lumberjackGRPCService");
const logUtilities_1 = require("../helpers/logUtilities");
const { stream } = (0, logUtilities_1.createElasticStream)(config_1.config.logger.pinoElasticOpts.elasticHost, config_1.config.logger.pinoElasticOpts.elasticVersion, config_1.config.logger.pinoElasticOpts.elasticUsername, config_1.config.logger.pinoElasticOpts.elasticPassword, config_1.config.logger.pinoElasticOpts.flushBytes, config_1.config.logger.pinoElasticOpts.elasticIndex);
const LOGLEVEL = config_1.config.logger.logstashLevel.toLowerCase();
const logger = config_1.config.nodeEnv === 'dev' || config_1.config.nodeEnv === 'test' ? console : (0, pino_1.pino)({ level: LOGLEVEL, stream });
const createErrorFn = (grpcClient) => {
    return (message, innerError, serviceOperation, id, callback) => {
        let errMessage = typeof message === 'string' ? message : message.stack ?? message.message;
        if (innerError) {
            if (innerError instanceof Error) {
                errMessage = `${errMessage}\r\n${innerError.stack ?? innerError.message}`;
            }
        }
        if (grpcClient) {
            grpcClient.log(errMessage, 'error', serviceOperation, id, callback);
        }
        else {
            logger.error({ message: errMessage, serviceOperation, id });
        }
    };
};
const createLogCallback = (level, grpcClient) => {
    switch (level) {
        case 'trace':
            return (message, serviceOperation, id, callback) => {
                if (grpcClient) {
                    grpcClient.log(message, level, serviceOperation, id, callback);
                }
                else {
                    logger.trace({ message, serviceOperation, id });
                }
            };
        case 'debug':
            return (message, serviceOperation, id, callback) => {
                if (grpcClient) {
                    grpcClient.log(message, level, serviceOperation, id, callback);
                }
                else {
                    logger.debug({ message, serviceOperation, id });
                }
            };
        case 'warn':
            return (message, serviceOperation, id, callback) => {
                if (grpcClient) {
                    grpcClient.log(message, level, serviceOperation, id, callback);
                }
                else {
                    logger.warn({ message, serviceOperation, id });
                }
            };
        case 'fatal':
            return (message, serviceOperation, id, callback) => {
                if (grpcClient) {
                    grpcClient.log(message, level, serviceOperation, id, callback);
                }
                else {
                    // NOTE: 'fatal(...)' method is not available on a `console` logger
                    logger.error({ message, serviceOperation, id });
                }
            };
        default:
            return (message, serviceOperation, id, callback) => {
                if (grpcClient) {
                    grpcClient.log(message, 'info', serviceOperation, id, callback);
                }
                else {
                    logger.info({ message, serviceOperation, id });
                }
            };
    }
};
class LoggerService {
    /* Fields representing methods for different log levels
     *
     * Each field is by default `null`, see `constructor()` for how each log level is set */
    log = () => null;
    debug = () => null;
    trace = () => null;
    warn = () => null;
    error = () => null;
    /* for enabling logging through the sidecar */
    lumberjackService = undefined;
    constructor(sidecarHost) {
        if (sidecarHost) {
            this.lumberjackService = new lumberjackGRPCService_1.LumberjackGRPCService(sidecarHost, config_1.config.functionName);
        }
        switch (config_1.config.logger.logstashLevel.toLowerCase()) {
            // error > warn > info > debug > trace
            case 'trace':
                this.trace = createLogCallback('trace', this.lumberjackService);
                this.debug = createLogCallback('debug', this.lumberjackService);
                this.log = createLogCallback('info', this.lumberjackService);
                this.warn = createLogCallback('warn', this.lumberjackService);
                this.error = createErrorFn(this.lumberjackService);
                break;
            case 'debug':
                this.debug = createLogCallback('debug', this.lumberjackService);
                this.log = createLogCallback('info', this.lumberjackService);
                this.warn = createLogCallback('warn', this.lumberjackService);
                this.error = createErrorFn(this.lumberjackService);
                break;
            case 'info':
                this.log = createLogCallback('info', this.lumberjackService);
                this.warn = createLogCallback('warn', this.lumberjackService);
                this.error = createErrorFn(this.lumberjackService);
                break;
            case 'warn':
                this.warn = createLogCallback('warn', this.lumberjackService);
                this.error = createErrorFn(this.lumberjackService);
                break;
            case 'error':
                this.error = createErrorFn(this.lumberjackService);
                break;
            case 'fatal':
                this.error = createErrorFn(this.lumberjackService);
                break;
            default:
                break;
        }
    }
    fatal(message, innerError, serviceOperation, id, callback) {
        this.error(message, innerError, serviceOperation, id, callback);
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.js.map