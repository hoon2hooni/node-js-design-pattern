const logger = require("./logger");
const Logger = require("./classLogger");
const defaultLogger = require('./defaultLogger')

logger.info("인포");

const hooniLogger = new Logger("hooni");
hooniLogger.info("이것은 후니 로거 입니다.");
hooniLogger.verbose(`이것은 후니 로거 입니다.
  후니는 모듈에 대해 공부중입니다 ㅎ ^^
`);

defaultLogger.info("이것은 기본 로거 입니다.")