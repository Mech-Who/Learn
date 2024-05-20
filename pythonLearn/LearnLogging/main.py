import logging.handlers
import sys
import logging
import mylib

# 格式化器formatter
formatter = logging.Formatter("%(asctime)s:%(name)s:%(levelname)s:%(lineno)s:%(message)s", datefmt="%Y-%m-%d %I:%M%S")

# 处理器handler
errorRotatingFileHandler = logging.handlers.RotatingFileHandler(
    "error-by-size.log", 
    mode='a', 
    maxBytes=1024*1024*1, 
    backupCount=5, 
    encoding='utf-8')
errorTimedRotatingFileHandler = logging.handlers.TimedRotatingFileHandler(
    "error-by-time.log", 
    when='midnight', 
    interval=1, 
    backupCount=5, 
    encoding='utf-8')
errorStreamHandler = logging.StreamHandler(sys.stdout)

# 添加格式化器（格式化）
errorRotatingFileHandler.setFormatter(formatter)
errorTimedRotatingFileHandler.setFormatter(formatter)
errorStreamHandler.setFormatter(formatter)

# 过滤器filter
# filter = logging.Filter(__name__)

# 记录器logger
logger = logging.getLogger(__name__)

# 添加过滤器（筛选）
# logger.addFilter(filter)

# 添加处理器（分发）
logger.addHandler(errorRotatingFileHandler)
logger.addHandler(errorTimedRotatingFileHandler)
logger.addHandler(errorStreamHandler)

def main():
    logging.basicConfig(filename="main.log", level=logging.DEBUG)
    logger.info("main started...")
    print("This is main.")
    mylib.play("MYLIB!")
    logger.info("main finished!")

if __name__=='__main__':
    main()
