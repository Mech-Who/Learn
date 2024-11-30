/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-11-22 14:23:18
 * @LastEditors: hushuhan 873933169@qq.com
 * @LastEditTime: 2024-12-01 00:48:19
 * @FilePath: \EssentialCpp\Chapter4\4_3\class_triangular.cpp
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include <algorithm>
#include <iterator>
#include "class_triangular.h"

using namespace std;

void Triangular::square(int pos)
{
    if (_beg_pos + _length < pos){
        vector<int> *pseq = &Triangular::seq[SQUARE];
        for (int ix = pseq->size(); ix < _beg_pos + _length; ++ix)
        {
            pseq->push_back(ix*ix);
        }
    }
}

void Triangular::triangular(int pos)
{
    if (_beg_pos + _length < pos){
        vector<int> *pseq = &Triangular::seq[TRIANGULAR];
        for (int ix = pseq->size(); ix < _beg_pos + _length; ++ix)
        {
            pseq->push_back(ix*(ix+1)/2);
        }
    }
}

typedef Triangular::PtrType PtrType;

PtrType func_tbl[Triangular::num_seq] = {
    nullptr,
    &Triangular::square,
    &Triangular::triangular};

vector<vector<int>> seq(Triangular::num_seq);

Triangular::Triangular(int len, int beg_pos)
    : _name("Triangular")
{
    _length = len > 0 ? len : 1;
    _beg_pos = beg_pos > 0 ? beg_pos : 1;
    _next = _beg_pos - 1;

    _generate_elem(_beg_pos + _length - 1);
}

// 成员初始化列表，主要用于对是object的成员的赋值，基础类型则都可以
Triangular::Triangular(const Triangular &rhs)
    : _length(rhs._length), _beg_pos(rhs._beg_pos), _next(rhs._beg_pos - 1)
{
    _generate_elem(_beg_pos + _length - 1);
}

Triangular::~Triangular()
{
}

int Triangular::elem(int pos) const
{
    return _elems[pos - 1];
}

bool Triangular::next(int &val)
{
    if (_next >= _beg_pos + _length - 1)
        return false;
    val = _elems[_next++];
    return true;
}

Triangular &Triangular::operator=(const Triangular &rhs)
{
    if (this != &rhs)
    {
        _name = rhs._name;
        _length = rhs._length;
        _beg_pos = rhs._beg_pos;
        _next = rhs._next;
        copy(rhs._elems.begin(), rhs._elems.end(), _elems);
    }
}

int Triangular::operator()(int index)
{
    if (index < _length)
    {
        return _elems[index];
    }
    else
    {
        // TODO: throw error();
        return -1;
    }
}

ostream &operator<<(ostream &os, Triangular &rhs)
{
    os << "( " << rhs._beg_pos << ", " << rhs._length << " )";
    rhs.display(rhs._length, rhs._beg_pos, os);
    return os;
}

istream &operator>>(istream &is, Triangular &rhs)
{
    is >> rhs._beg_pos >> rhs._length;
    rhs.next_reset();
    if (rhs._beg_pos + rhs._length > rhs._elems.size())
    {
        Triangular::gen_elements(rhs._beg_pos + rhs._length);
    }
    return is;
}

bool Triangular::is_elem(int value)
{
    if (!_elems.size() || _elems[_elems.size() - 1] < value)
        gen_elems_to_value(value);

    vector<int>::iterator found_it;
    vector<int>::iterator end_it = _elems.end();

    found_it = find(_elems.begin(), end_it, value);
    return found_it != end_it;
}

void Triangular::gen_elements(int length)
{
    if (length < 0 || length > _max_elems)
    {
        // TODO: 发出错误消息
        return;
    }
    if (_elems.size() < length)
    {
        int ix = _elems.size() ? _elems.size() + 1 : 1;
        for (; ix <= length; ++ix)
        {
            _elems.push_back(ix * (ix + 1) / 2);
        }
    }
}

void Triangular::gen_elems_to_value(int value)
{
    int ix = _elems.size();
    if (!ix)
    {
        _elems.push_back(1);
        ix = 1;
    }
    while (_elems[ix - 1] < value && ix < _max_elems)
    {
        // cout << "elems to value: " << ix*(ix+1)/2 << endl;
        ++ix;
        _elems.push_back(ix * (ix + 1) / 2);
    }
    if (ix == _max_elems)
        cerr << "Triangular Sequence: oops: value too large "
             << value << " --  exceeds max size of "
             << _max_elems << endl;
}

void Triangular::display(int length, int beg_pos, ostream &os)
{
    for (int ix = 0; ix < length; ++ix)
    {
        os << _elems[beg_pos + ix] << " ";
    }
    os << endl;
}

void Triangular::_generate_elem(int last_pos)
{
    if (_elems.size() >= last_pos)
        return;
    for (int ix = _elems.size(); ix < last_pos; ++ix)
        _elems.push_back((ix + 1) * (ix + 2) / 2);
}

inline bool Triangular::iterator::
operator==(const Triangular_iterator &rhs) const
{
    return _index == rhs._index;
}

inline bool Triangular::iterator::
operator!=(const Triangular_iterator &rhs) const
{
    return !(*this == rhs);
}

inline int Triangular::iterator::
operator*() const
{
    this->check_integrity();
    return Triangular::_elems[_index];
}

inline void Triangular::iterator::
    check_integrity() const
{
    if (_index >= Triangular::_max_elems)
    {
        // TODO: 丢出异常
        // throw iterator_overflow();
        return;
    }
    if (_index >= Triangular::_elems.size())
        Triangular::gen_elements(_index + 1);
}

inline Triangular::iterator &Triangular::iterator::
operator++()
{
    ++_index;
    check_integrity();
    return *this;
}

inline Triangular::iterator Triangular::iterator::
operator++(int)
{
    Triangular_iterator tmp = *this;
    ++_index;
    check_integrity();
    return tmp;
}
