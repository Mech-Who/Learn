#include <iostream>

int main()
{
    int a[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for (int *i = a; *i != 10; ++i)
    {
        std::cout << *i << std::endl;
    }
    // 所有的nullptr公用一个nullptr值，nullptr用于和0以及NULL进行区分。
    int *n = nullptr;
    // 判空指针不必明确写出，直接使用以下方法最好。
    if (n)
    {
        std::cout << "n is not nullptr" << std::endl;
    }
    else
    {
        std::cout << "n is nullptr" << std::endl;
    }
    // 引用声明时就必须初始化一个有效的值，否则会报错。
    int &num = a[0];
    std::cout << num << std::endl;
    return 0;
}