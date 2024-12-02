#include "NumSequence.h"

class Fibonacci : public NumSequence
{
public:
    Fibonacci(int len = 1, int beg_pos = 1, std::vector<int> *pe=nullptr)
        : NumSequence(len, beg_pos, *pe){}
    Fibonacci(int len, int beg_pos)
        : NumSequence(len, beg_pos, _elems){}
    Fibonacci(const Fibonacci &rhs)
        : NumSequence(rhs){}
    virtual const char *what_am_i() const { return "Fibonacci"; }

protected:
    virtual void gen_elems(int pos) const;
    static std::vector<int> _elems;
};
