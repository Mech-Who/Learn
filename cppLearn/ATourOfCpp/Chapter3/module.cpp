#include <iostream>

// import 语法
// import std;

export module Vector;

// export 语法
export class Vector
{
    double *elem;
    int sz;

public:
    Vector() : elem(nullptr), sz(0) {}
    Vector(int s) : elem(new double[s]), sz(s) {}
    Vector(const Vector &v) : elem(new double[v.sz]), sz(v.sz) {} // 拷贝构造函数
    Vector(Vector &&v) : elem(v.elem), sz(v.sz) {}                // 移动构造函数
    ~Vector() { delete[] elem; }

    double &operator[](int i) const { return elem[i]; }
    int size() const { return sz; }
};

export bool operator==(const Vector &v1, const Vector &v2)
{
    if (v1.size() != v2.size())
        return false;
    for (int i = 0; i < v1.size(); ++i)
        if (v1[i] != v2[i])
            return false;
    return true;
}

export auto add(int a, int b) -> int
{
    std::cout << "add" << std::endl;
    return a + b;
}

namespace MySpace
{
    auto add(int a, int b) -> int
    {
        std::cout << "MySpace::add" << std::endl;
        return a + b;
    }
}

int main()
{
    add(1, 2);
    MySpace::add(1, 2);

    using MySpace::add;
    add(1, 2);
    return 0; // end of main function
}