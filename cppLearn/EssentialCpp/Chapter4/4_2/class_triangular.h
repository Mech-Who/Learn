#include<string>

class Triangular;

class Triangular{
public:
    Triangular(int len);
    Triangular(int len=1, int beg_pos=1);   // 默认构造函数: 参数列表为空 或者 每一个参数都设置了默认值
    Triangular(const Triangular &rhs);
    ~Triangular();  // 析构函数
private:
    std::string _name;
    int _length;    // 元素个数
    int _beg_pos;   // 起始位置
    int _next;      // 下一个迭代目标
};
