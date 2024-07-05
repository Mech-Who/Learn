class HNWebPage(metaclass=ABCMeta):

    @abstractmethod
    def get_text(self) -> str:
        """获取页面文本内容"""

    # 新增 get_size 与 get_generated_at

    @abstractmethod
    def get_size(self) -> int:
        """获取页面大小"""

    @abstractmethod
    def get_generated_at(self) -> datetime.datetime:
        """获取页面生成时间"""

class RemoteHNWebPage:
    def get_generated_at(self) -> datetime.datetime:
        # 页面生成时间等同于通过 requests 请求的时间
        return datetime.datetime.now()

class LocalHNWebPage:
    def get_generated_at(self) -> datetime.datetime:
        raise NotImplementedError("local web page can not provide generate_at info")

class SiteAchiever:
    """将不同时间点的 HN 页面归档"""

    def save_page(self, page: HNWebPage):
        """将页面保存到后端数据库
        """
        data = {
            "content": page.get_text(),
            "generated_at": page.get_generated_at(),
            "size": page.get_size(),
        }
        # 将 data 保存到数据库中
