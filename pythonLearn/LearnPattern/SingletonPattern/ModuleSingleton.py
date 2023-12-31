"""
默认情况下，所有的模块都是单例，这是由Python的导入行为所决定的。

Python通过下列方式来工作：
1. 检查一个Python模块是否已经导入
2. 如果已经导入，则返回该模块的对象。如果还没有导入，
则导入该模块，并实例化。
3. 因此，当模块被导入的时候，它就会被初始化。然而，
当同一个模块被再次导入的时候，他不会再次初始化，
因为单例模式只能有一个对象，所以，它会返回同一个对象。

"""
