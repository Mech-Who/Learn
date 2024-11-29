/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-11-22 14:23:18
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-11-29 21:59:17
 * @FilePath: \EssentialCpp\Chapter4\4_3\class_triangular.h
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include <string>
#include <vector>
#include <iostream>

class Triangular;

class Triangular
{
public:
    Triangular(int len = 1, int beg_pos = 1); // 默认构造函数: 参数列表为空 或者 每一个参数都设置了默认值
    Triangular(const Triangular &rhs);
    ~Triangular(); // 析构函数

    // member function
    int length() const { return _length; }
    int beg_pos() const { return _beg_pos; }
    int elem(int pos) const;

    bool next(int &val);
    void next_reset() { _next = _beg_pos - 1; }

    Triangular &operator=(const Triangular &rhs);
    int operator()(int index);

    friend std::ostream& operator<<(std::ostream& os, Triangular &rhs);
    friend std::istream& operator>>(std::istream& is, Triangular &rhs);

    static bool is_elem(int);
    static void gen_elements(int length);
    static void gen_elems_to_value(int value);
    static void display(int length, int beg_pos, std::ostream &os = std::cout);

    // cout << Triangular()
    // friend operator<<(ostream& os){
    // }

    class Triangular_iterator
    {
    public:
        Triangular_iterator(int index) : _index(index - 1) {}
        bool operator==(const Triangular_iterator &) const;
        bool operator!=(const Triangular_iterator &) const;
        int operator*() const;
        Triangular_iterator &operator++();
        Triangular_iterator operator++(int);

        friend int operator*(const Triangular_iterator &rhs);

    private:
        void check_integrity() const;
        int _index;
    };

    friend int operator*(const Triangular_iterator &rhs);
    // friend int Triangular_iterator::operator*();
    // friend void Triangular_iterator::check_integrity();

    typedef Triangular_iterator iterator;

    iterator begin() const { return iterator(_beg_pos); }
    iterator end() const { return iterator(_beg_pos + _length); }

private:
    static void _generate_elem(int last_pos);

    std::string _name;
    int _length;  // 元素个数
    int _beg_pos; // 起始位置
    // mutable 表示使用const Triangular(对象)时,改变_next不会造成const报错
    mutable int _next; // 下一个迭代目标

    static const int _max_elems = 1024;
    static std::vector<int> _elems;
};
