#include <iostream>
#include "class_triangular.h"

Triangular::Triangular(int len, int beg_pos)
    : _name("Triangular")
{
    _length = len > 0 ? len : 1;
    _beg_pos = beg_pos > 0 ? beg_pos : 1;
    _next = _beg_pos - 1;

    _generate_elem(_beg_pos+_length-1);
}

// 成员初始化列表，主要用于对是object的成员的赋值，基础类型则都可以
Triangular::Triangular(const Triangular &rhs)
    : _length(rhs._length), _beg_pos(rhs._beg_pos), _next(rhs._beg_pos-1)
{
    _generate_elem(_beg_pos+_length-1);
}

Triangular::~Triangular()
{}

int Triangular::elem(int pos) const{
    return _elems[pos-1];
}

bool Triangular::next(int &val){
    if (_next >= _beg_pos + _length - 1)
        return false;
    val = _elems[ _next++ ];
    return true;
}

void Triangular::_generate_elem(int last_pos){
    if (_elems.size() >= last_pos)
        return;
    for (int ix=_elems.size(); ix < last_pos; ++ix)
        _elems.push_back((ix+1)*(ix+2)/2);
}
