#include <iostream>
#include <string>
#include <variant>

enum class Type
{
    Integer,
    Double
};

/**
 * union是一种特殊的struct，成员可以共享内存
 */
union Value
{
    int int_num;
    double double_num;
};

struct Entry
{
    std::string name;
    Type t;
    Value v;
};

void f(Entry *pe)
{
    if (pe->t == Type::Integer)
    {
        std::cout << pe->v.int_num << std::endl;
    }
    if (pe->t == Type::Double)
    {
        std::cout << pe->v.double_num << std::endl;
    }
}

/**
 * 更好的选择：variant
 * variant对union进行了封装：
 *      将类型判断和内容元素的切换封装在一起，不易出错
 */
struct NewEntry
{
    std::string name;
    std::variant<int, double> v;
};

void f(NewEntry *pe)
{
    if (std::holds_alternative<int>(pe->v))
    {
        std::cout << std::get<int>(pe->v) << std::endl;
    }
}
