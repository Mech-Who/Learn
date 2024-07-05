from unittest import mock

def test_grouper_returning_valid_types():
    """测试 get_groups 是否返回了正确类型
    """
    resp = mock.Mock()
    # Mock 掉 requests.get 函数
    with mock.patch('hn_site_grouper.requests.get') as mocked_get:
        mocked_get.return_value = resp
        with open('static_hn.html', 'r') as fp:
            # Mock 掉响应的 text 字段
            resp.text = fp.read()

        grouper = SiteSourceGrouper('https://news.ycombinator.com/')
        result = grouper.get_groups()
        assert isinstance(result, Counter), "groups should be Counter instance"
