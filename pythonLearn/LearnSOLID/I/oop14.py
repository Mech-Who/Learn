class ContentOnlyHNWebPage(metaclass=ABCMeta):
    """抽象类：Hacker New 站点页面（仅提供内容）
    """

    @abstractmethod
    def get_text(self) -> str:
        raise NotImplementedError


class HNWebPage(ContentOnlyHNWebPage):
    """抽象类：Hacker New 站点页面（含元数据）
    """

    @abstractmethod
    def get_size(self) -> int:
        """获取页面大小"""

    @abstractmethod
    def get_generated_at(self) -> datetime.datetime:
        """获取页面生成时间"""