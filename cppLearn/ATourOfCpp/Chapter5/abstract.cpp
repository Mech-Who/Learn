#include <iostream>
#include <list>

class Vector
{
    double *elem;
    int sz;

public:
    Vector() : elem(nullptr), sz(0){};
    Vector(int s) : elem(new double[s]), sz(s) {}
    ~Vector() { delete[] elem; }

    double &operator[](int i) { return elem[i]; }
    int size() const { return sz; }
};

////////// virtual //////////


// 虚函数 的实现基于 虚函数表 vtbl
class Container
{
public:
    virtual double &operator[](int) = 0; // 纯虚函数
    virtual int size() const = 0;        // const成员函数
    virtual ~Container() {}              // 析构函数
};

class Vector_container : public Container
{
public:
    Vector_container(int s) : v(s) {}
    ~Vector_container() {}

    double &operator[](int i) override { return v[i]; }
    int size() const override { return v.size(); }

private:
    Vector v;
};

class List_container : public Container
{
public:
    List_container() {}
    List_container(int s) {}
    ~List_container() {}

    double &operator[](int i) override;
    int size() const override { return l.size(); }

private:
    std::list<double> l;
};

double &List_container::operator[](int i)
{
    for (auto &x : l)
    {
        if (i == 0)
            return x;
        --i;
    }
    throw std::out_of_range{"List container"};
}