/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-11-22 14:23:18
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-11-22 17:58:53
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

    // cout << Triangular()
    // friend operator<<(ostream& os){
    // }

private:
    static void _generate_elem(int last_pos);

    std::string _name;
    int _length;  // 元素个数
    int _beg_pos; // 起始位置
    // mutable 表示使用const Triangular(对象)时,改变_next不会造成const报错
    mutable int _next; // 下一个迭代目标

    static std::vector<int> _elems;
};
