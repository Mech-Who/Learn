import io
import sys
from typing import Generator

import requests
from lxml import etree


class Post:
    """HN(https://news.ycombinator.com/) 上的条目

    :param title: 标题
    :param link: 链接
    :param points: 当前得分
    :param comments_cnt: 评论数
    """
    def __init__(self, title: str, link: str, points: str, comments_cnt: str):
        self.title = title
        self.link = link
        self.points = int(points)
        self.comments_cnt = int(comments_cnt)


class HNTopPostsSpider:
    """抓取 HackerNews Top 内容条目

    :param fp: 存储抓取结果的目标文件对象
    :param limit: 限制条目数，默认为 5
    """
    ITEMS_URL = 'https://news.ycombinator.com/'

    def __init__(self, limit: int = 5):
        self.limit = limit

    def fetch(self) -> Generator[Post, None, None]:
        """从 HN 抓取 Top 内容
        """
        resp = requests.get(self.ITEMS_URL)

        # 使用 XPath 可以方便的从页面解析出你需要的内容，以下均为页面解析代码
        # 如果你对 xpath 不熟悉，可以忽略这些代码，直接跳到 yield Post() 部分
        html = etree.HTML(resp.text)
        items = html.xpath('//table[@class="itemlist"]/tr[@class="athing"]')
        for item in items[:self.limit]:
            node_title = item.xpath('./td[@class="title"]/a')[0]
            node_detail = item.getnext()
            points_text = node_detail.xpath('.//span[@class="score"]/text()')
            comments_text = node_detail.xpath('.//td/a[last()]/text()')[0]

            yield Post(
                title=node_title.text,
                link=node_title.get('href'),
                # 条目可能会没有评分
                points=points_text[0].split()[0] if points_text else '0',
                comments_cnt=comments_text.split()[0]
            )


def write_posts_to_file(posts: List[Post], fp: io.TextIOBase, title: str):
    """负责将帖子列表写入文件
    """
    fp.write(f'# {title}\n\n')
    for i, post in enumerate(posts, 1):
        fp.write(f'> TOP {i}: {post.title}\n')
        fp.write(f'> 分数：{post.points} 评论数：{post.comments_cnt}\n')
        fp.write(f'> 地址：{post.link}\n')
        fp.write('------\n')


class GithubOnlyHNTopPostsSpider(HNTopPostsSpider):
    """只关心来自 Github 的内容
    """
    def interested_in_post(self, post: Post) -> bool:
        return 'github' in post.link.lower()


class GithubNBloomBergHNTopPostsSpider(HNTopPostsSpider):
    """只关系来自 Github/BloomBerg 的内容
    """
    def interested_in_post(self, post: Post) -> bool:
        if 'github' in post.link.lower() \
                or 'bloomberg' in post.link.lower():
            return True
        return False

def main():
    # crawler = HNTopPostsSpider()
    # 使用新的子类
    crawler = GithubOnlyHNTopPostsSpider()

    posts = list(crawler.fetch())
    file_title = 'Top news on HN'
    write_posts_to_file(posts, sys.stdout, file_title)


if __name__ == '__main__':
    main()