#include <iostream>
#include <vector>

using namespace std;

class Vector
{
    double *elem;
    int sz;

public:
    Vector() {}
    Vector(std::initializer_list<double>);
    Vector(int s) : elem{new double[s]}, sz{s}
    {
        for (int i = 0; i != s; ++i)
            elem[i] = 0.0;
    }
    ~Vector() { delete[] elem; }

    // void push_back(double);
};

/**
 * static_cast 本身并不负责检查要转换的值，只进行类型转换；
 * reinterpret_cast 和 bit_cat 用于将对象直接当作字节流；
 * const_cast 用于将const限定符消除。
 * dynamic_cast 用于将基类指针转换为派生类指针。
 */
Vector::Vector(std::initializer_list<double> lst)
    : elem{new double[lst.size()]}, sz{static_cast<int>(lst.size())}
{
    std::copy(lst.begin(), lst.end(), elem);
}

int main()
{
    Vector v1{3};
    cout << "hello world!" << endl;
    return 0;
}