#include <iostream>
#include <cassert>

// noexcept限定词，表示一旦产生异常，直接终止程序
int f() noexcept
{
    std::cout << "no exception" << std::endl;
}

int main()
{
    try
    {
        /* code */
    }
    catch (const std::exception &e)
    {
        std::cerr << e.what() << '\n';
        throw std::out_of_range("out of range");
    }
    static_assert(1 == 1, "exception");
    // static_assert(1 == 2, "exception");  // 编译时就会报错
    assert(1 == 2);
}