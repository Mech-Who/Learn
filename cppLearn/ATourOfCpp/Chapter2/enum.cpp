#include <iostream>

enum class Color
{
    red,
    yellow,
    blue
};

// enum class 是强类型枚举，不可以隐式转换，只能显式转换
Color a = Color::red;
Color b = a;
int c = int(a);

// 但是可以使用int为Color赋值
Color a{5};

enum class Traffic_light
{
    red,
    yellow,
    green
};

// 不同枚举类的同名成员不可混用。
// Color r = Traffic_Color::red; // 会报错

// 枚举类因为也是类，可以定义赋值操作符。
Traffic_light &operator++(Traffic_light &t)
{
    using enum Traffic_light;
    switch (t)
    {
    case green:
        return t = yellow;
    case yellow:
        return t = red;
    case red:
        return t = green;
    }
}

int run()
{
    Traffic_light a = Traffic_light::red;
    ++a;
}

enum Car
{
    bw,
    others
};

// enum是弱类型，可以方便的进行隐式转换，其中成员与enum结构同级。
int car = bw;
int car2 = others;
