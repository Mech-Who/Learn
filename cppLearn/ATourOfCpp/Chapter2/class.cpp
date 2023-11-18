class Vector
{
public:
    Vector(int s) : elem(new double[s]), sz(s) {}
    auto &operator[](int i) { return elem[i]; }
    int getSize() { return this->sz; }

private:
    double *elem;
    int sz;
};

// class有private、public、protected作用域，用于将声明和实现分开
