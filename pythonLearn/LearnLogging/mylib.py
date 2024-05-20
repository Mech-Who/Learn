import logging
logger = logging.getLogger(__name__)

def play(message: str) -> None:
    logger.debug("give a debug")
    logger.info("give a info")
    logger.warning("give a warning")
    logger.exception("give a exception")
    logger.error("give a error")
    logger.critical("give a critical")
    print("saying: ", message)
