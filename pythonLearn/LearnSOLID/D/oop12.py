from abc import ABCMeta, abstractmethod


class HNWebPage(metaclass=ABCMeta):
    """抽象类：Hacker New 站点页面
    """

    @abstractmethod
    def get_text(self) -> str:
        raise NotImplementedError

class RemoteHNWebPage(HNWebPage):
    """远程页面，通过请求 HN 站点返回内容"""

    def __init__(self, url: str):
        self.url = url

    def get_text(self) -> str:
        resp = requests.get(self.url)
        return resp.text

class SiteSourceGrouper:
    """对 HN 页面的新闻来源站点进行分组统计
    """

    def __init__(self, page: HNWebPage):
        self.page = page

    def get_groups(self) -> Dict[str, int]:
        """获取 (域名, 个数) 分组
        """
        html = etree.HTML(self.page.get_text())
        # 通过 xpath 语法筛选新闻域名标签
        elems = html.xpath('//table[@class="itemlist"]//span[@class="sitestr"]')

        groups = Counter()
        for elem in elems:
            groups.update([elem.text])
        return groups


def main():
    # 实例化 page，传入 SiteSourceGrouper
    page = RemoteHNWebPage(url="https://news.ycombinator.com/")
    grouper = SiteSourceGrouper(page).get_groups()