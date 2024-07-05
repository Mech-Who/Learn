from oop11 import SiteSourceGrouper
from collections import Counter


def test_grouper_returning_valid_types():
    """测试 get_groups 是否返回了正确类型
    """
    grouper = SiteSourceGrouper('https://news.ycombinator.com/')
    result = grouper.get_groups()
    assert isinstance(result, Counter), "groups should be Counter instance"
