import logging
import logging.config
import yaml


def filter_maker(level):
    level = getattr(logging, level)

    def filter(record):
        return record.levelno <= level

    return filter


yaml_config = None
with open("logging.yaml", 'r') as f:
    yaml_config = yaml.safe_load(f)

# print(yaml_config)

logging.config.dictConfig(yaml_config)

logger = logging.getLogger("use_dict_config")

# 'application' code
logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')
