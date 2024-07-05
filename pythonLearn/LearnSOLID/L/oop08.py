class User(Model):
    """普通用户模型类
    """
    def __init__(self, username: str):
        self.username = username

    def allow_deactivate(self) -> bool:
        """是否允许被停用
        """
        return True

    def deactivate(self):
        """将当前用户停用
        """
        self.is_active = True
        self.save()

class Admin(User):
    """管理员用户类
    """
    def allow_deactivate(self) -> bool:
        # 管理员用户不允许被停用
        return False

def deactivate_users(users: Iterable[User]):
    """批量停用多个用户
    """
    for user in users:
        if not user.allow_deactivate():
            logger.info(f'user {user.username} does not allow deactivating, skip.')
            continue

        user.deactivate()