class User(Model):
    """普通用户模型类
    """
    def __init__(self, username: str):
        self.username = username

    def deactivate(self):
        """停用当前用户
        """
        self.is_active = True
        self.save()

class Admin(User):
    """管理员用户类
    """
    def deactivate(self):
        # 管理员用户不允许被停用
        raise RuntimeError('admin can not be deactivated!')

def deactivate_users(users: Iterable[User]):
    """批量停用多个用户
    """
    for user in users:
        user.deactivate()
