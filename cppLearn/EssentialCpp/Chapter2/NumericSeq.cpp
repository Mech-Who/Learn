#include "NumericSeq.h"

void display(const vector<int> &vec, ostream &os)
{
    for (int ix = 0; ix < vec.size(); ++ix)
    {
        os << vec[ix] << ' ';
    }
    os << endl;
}

const vector<int> *
fibon_seq(int size)
{
    static vector<int> elems;

    if (!is_size_ok(size))
        return nullptr;

    for (int ix = elems.size(); ix < size; ++ix)
    {
        if (ix == 0 || ix == 1)
            elems.push_back(1);
        else
            elems.push_back(elems[ix - 1] + elems[ix - 2]);
    }
    return &elems;
}

const vector<int> *
penta_seq(int size){
    static vector<int> elems;

    if (is_size_ok(size))
        return nullptr;

    for (int ix=elems.size(); ix < size; ++ix){
        int n = ix+1;
        elems[ix] = n * (3 * n - 1) / 2;
    }
    return &elems;
}

void display_message(char ch, ostream &os)
{
    os << ch;
}
void display_message(const string &msg, ostream &os)
{
    os << msg;
}
void display_message(const string &msg, int elem, ostream &os){
    os << msg << "elem:" << elem;
}

template <typename elemType>
void display_message(const string &msg, const vector<elemType> &vec, ostream &os)
{
    os << msg;
    for (int ix = 0; ix < vec.size(); ++ix)
    {
        elemType t = vec[ix];
        os << t << ' ';
    }
}