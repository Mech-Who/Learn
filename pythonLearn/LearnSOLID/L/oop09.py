class User(Model):
    """普通用户模型类
    """
    def __init__(self, username: str):
        self.username = username

    def list_related_posts(self) -> List[int]:
        """查询所有与之相关的帖子 ID
        """
        return [post.id for post in session.query(Post).filter(username=self.username)]

class Admin(User):
    """管理员用户类
    """
    def list_related_posts(self) -> Iterable[int]:
        # 管理员与所有的帖子都有关，为了节约内存，使用生成器返回帖子 ID
        for post in session.query(Post).all():
            yield post.id

def list_user_post_titles(user: User) -> Iterable[str]:
    """获取与用户有关的所有帖子标题
    """
    for post_id in user.list_related_posts():
        yield session.query(Post).get(post_id).title

def get_user_posts_count(user: User) -> int:
    """获取与用户相关的帖子个数
    """
    return len(user.list_related_posts())
