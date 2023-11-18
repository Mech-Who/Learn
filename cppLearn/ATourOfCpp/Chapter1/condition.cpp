// import std;
#include <iostream>

int main()
{
    for (auto i = 0; i < 10; ++i)
    {
        std::cout << i << std::endl;
    }
    // 范围for循环
    /** 2. 范围for循环
     * for(auto item:list)仅拷贝
     * for(auto& item:list)引用，可对原数据进行操作
     * for(const auto item:list)不可修改
     */
    for (auto i : {1, 2, 3, 4, 5, 6})
    {
        std::cout << i << std::endl;
    }
    // if 也可以有赋值部分了
    if (auto i = 0; i < 2)
    {
        std::cout << "i < 2" << std::endl;
    }
    int i = 0;
    while (i < 10)
    {
        std::cout << i << std::endl;
        ++i;
    }
    switch(i)
    {
        case 1:
            std::cout << "in case 1" << std::endl;
        case 2:
            std::cout << "in case 2" << std::endl;
            break;
        case 3:
            std::cout << "in case 3" << std::endl;
        case 4:
            std::cout << "in case 4" << std::endl;
            break;
        default:
            std::cout << "in default" << std::endl;
    }
}