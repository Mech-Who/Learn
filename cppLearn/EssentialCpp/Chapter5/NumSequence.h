#include <iostream>
#include <vector>

class NumSequence
{
public:
    virtual ~NumSequence(){}
    virtual const char* what_am_i() const = 0;
    int elem(int pos) const;
    std::ostream& print(std::ostream& os=std::cout) const;
    int length() const { return _length; }
    int beg_pos() const { return _beg_pos; }
    static int max_elems() { return 64; }
protected:
    virtual void gen_elems(int pos) const = 0;
    bool check_integrity(int pos, int size) const;
    NumSequence(int len, int bp, std::vector<int> &re)
        : _length(len), _beg_pos(bp), _elems(re) {}
    
    int _length;
    int _beg_pos;
    std::vector<int> &_elems;
};
