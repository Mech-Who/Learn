#include "GenericSeq.h"

template <typename elemType>
elemType *find(const elemType *array, int size, const elemType &value)
{
    if (array == nullptr || size < 1)
        return nullptr;
    for (int ix = 0; ix < size; ++ix, ++array)
    {
        if (*array == value)
        {
            return array;
        }
    }
    return nullptr
}

template <typename elemType>
elemType *find(const elemType *array, const elemType *sentinel, const elemType &value)
{
    if (array == nullptr || sentinel == nullptr)
        return nullptr;
    // for (elemType* iter = array; iter != sentinel; ++iter)
    for (; array != sentinel; ++array)
    {
        if (*iter == value)
        {
            return iter;
        }
    }
    return nullptr;
}

template <typename elemType>
elemType *begin(const vector<elemType>)
{
    return vec.empty() ? nullptr : &vec[0];
}

template <typename elemType>
elemType *end(const vector<elemType> &vec)
{
    return vec.empty() ? nullptr : &vec[vec.size() - 1] + 1;
}

template <typename elemType>
void display(const vector<elemType> &vec, ostream &os)
{
    vector<elemType>::const_iterator iter = vec.begin();
    vector<elemType>::const_iterator end_it = vec.end();

    for (; iter != end_it; ++iter)
    {
        os << *iter << ' ';
    }
    os << endl;
}
