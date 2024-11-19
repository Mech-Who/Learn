#include <iostream>
#include "class_triangular.h"

Triangular::Triangular(int len, int beg_pos)
    : _name("Triangular")
{
    _length = len > 0 ? len : 1;
    _beg_pos = beg_pos > 0 ? beg_pos : 1;
    _next = _beg_pos - 1;
}

// 成员初始化列表，主要用于对是object的成员的赋值，基础类型则都可以
Triangular::Triangular(const Triangular &rhs)
    : _length(rhs._length), _beg_pos(rhs._beg_pos), _next(rhs._beg_pos-1)
{}
