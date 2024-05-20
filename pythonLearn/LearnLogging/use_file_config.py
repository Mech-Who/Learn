import logging
import logging.config

logging.config.fileConfig('logging.conf', encoding='utf-8')

logger = logging.getLogger(__name__)

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')
