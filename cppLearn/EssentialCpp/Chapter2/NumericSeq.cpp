#include "NumericSeq.h"

void display(const vector<int> &vec, ostream &os){
    for (int ix=0; ix<vec.size(); ++ix){
        os << vec[ix] << ' ';
    }
    os << endl;
}

const vector<int>*
fibon_seq(int size)
{
    static vector<int> elems;

    if (! is_size_ok(size))
        return nullptr;

    for (int ix=elems.size(); ix < size; ++ix){
        if ( ix==0 || ix==1)
            elems.push_back(1);
        else
            elems.push_back(elems[ix-1] + elems[ix-2]);
    }
    return &elems;
}

