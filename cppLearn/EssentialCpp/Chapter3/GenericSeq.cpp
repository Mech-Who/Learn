#include "GenericSeq.h"

using namespace std;

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

/* 取得vec中所有小于10的值 */
vector<int> less_than_10(const vector<int> &vec){
    vector<int> nvec;
    for ( int ix=0;i ix<vec.size(); ++ix)
        if (vec[ix]<10)
            nvec.push_back(vec[ix]);
    return nvec;
}

// 将less_than_10通用化
vector<int> less_than(const vector<int> &vec, int less_than_val){
    vector<int> nvec;
    for ( int ix=0;i ix<vec.size(); ++ix)
        if (vec[ix]<less_than_val)
            nvec.push_back(vec[ix]);
    return nvec;
}

// 将less_than在比较操作上通用化
vector<int> filter(const vector<int> &vec,
                    int filter_val,
                    bool (*pred)(int, int)){
    vector<int> nvec;
    for ( int ix=0;i ix<vec.size(); ++ix)
        if (pred(vec[ix], filter_val))
            nvec.push_back(vec[ix]);
    return nvec;
}

// 为filter准备操作符函数
bool less_than(int v1, int v2){
    return v1 < v2? true: false;
}
bool greater_than(int v1, int v2){
    return v1 > v2? true: false;
}