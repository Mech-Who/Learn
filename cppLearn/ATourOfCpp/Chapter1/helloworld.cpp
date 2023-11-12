#include <iostream>
#include <vector>
// import std;

double fct(int arg) // 函数命名空间
{
    // double square(double);  // 声明函数的时候，函数参数的名称不重要
    // double sqrt(double d);  // 函数的类型是[返回值类型+参数类型]的列表

    double d1 = 1.2;
    double d2{2.3};
    double d3 = {3.4};

    auto d4{8.9};

    std::vector<int> v{1, 2, 3, 4, 5, 6}; // 不知道用哪种时，推荐用这种，可以避免隐式类型转换导致的信息丢失。

    return 3.4;
}

int var = 17;
const double sqv = fct(var);
// constexpr double res = fct(var); // 这种写法会报错
constexpr int dmv = 17; // 但是这样就不会，const才可以运行时计算，constexpr必须直接指定

// 如果想要使用constexpr来接受函数返回值，则函数返回值需要定义为constexpr或consteval
// consteval表示该函数仅在编译时计算
constexpr double getRes(double number)
{
    return number;
}

constexpr double number = getRes(1.1); // 不会报错
double abc = 5.6;
// constexpr double number2 = getRes(abc);  // 会报错，因为abc是变量
const double abc2 = 6.7;
constexpr double number2 = getRes(abc2); // 不会报错，因为abc2是常量
const double abc3 = fct(var);
// constexpr double number2 = getRes(abc3);  // 会报错，因为fct返回值不是常量

consteval double square(double x)
{
    return x * x;
}

constexpr double max1 = 1.4 * square(17);
// const double max3 = 1.4 * square(var);  // var是变量，因此会报错

// 被声明为constexpr或者consteval的函数是C++版本的纯函数。他们不能有任何副作用。

int main()
{
    std::cout << "hello world!" << std::endl;
    return 0;
}