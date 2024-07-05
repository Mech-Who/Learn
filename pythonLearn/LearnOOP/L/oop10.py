class User(Model):
    """普通用户模型类
    """
    def __init__(self, username: str):
        self.username = username

    def list_related_posts(self) -> Iterable[int]:
        """查询所有与之相关的帖子 ID
        """
        for post in session.query(Post).filter(username=self.username):
            yield post.id

    def get_related_posts_count(self) -> int:
        """获取与用户有关的帖子总数
        """
        value = 0
        for _ in self.list_related_posts():
            value += 1
        return value


class Admin(User):
    """管理员用户类
    """
    def list_related_posts(self) -> Iterable[int]:
        # 管理员与所有的帖子都有关，为了节约内存，使用生成器返回
        for post in session.query(Post).all():
            yield post.id