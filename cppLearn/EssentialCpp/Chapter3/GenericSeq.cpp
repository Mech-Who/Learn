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
    return nullptr;
}

template <typename elemType>
elemType *find(const elemType *array, const elemType *sentinel, const elemType &value)
{
    if (array == nullptr || sentinel == nullptr)
        return nullptr;
    // for (elemType* iter = array; iter != sentinel; ++iter)
    for (; array != sentinel; ++array)
    {
        if (*array == value)
        {
            return array;
        }
    }
    return nullptr;
}

template <typename elemType>
elemType *begin(const vector<elemType> &vec)
{
    return vec.empty() ? nullptr : &vec[0];
}

template <typename elemType>
elemType *end(const vector<elemType> &vec)
{
    return vec.empty() ? nullptr : &vec[vec.size() - 1] + 1;
}

void display(const vector<int> &vec, ostream &os)
{
    vector<int>::const_iterator iter = vec.begin();
    vector<int>::const_iterator end_it = vec.end();

    for (; iter != end_it; ++iter)
    {
        os << *iter << ' ';
    }
    os << endl;
}

/* 取得vec中所有小于10的值 */
vector<int> less_than_10(const vector<int> &vec){
    vector<int> nvec;
    for ( int ix=0; ix<vec.size(); ++ix)
        if (vec[ix]<10)
            nvec.push_back(vec[ix]);
    return nvec;
}

// 将less_than_10通用化
vector<int> less_than(const vector<int> &vec, int less_than_val){
    vector<int> nvec;
    for ( int ix=0; ix<vec.size(); ++ix)
        if (vec[ix]<less_than_val)
            nvec.push_back(vec[ix]);
    return nvec;
}

// 将less_than在比较操作上通用化
vector<int> filter(const vector<int> &vec,
                    int filter_val,
                    bool (*pred)(int, int)){
    vector<int> nvec;
    for ( int ix=0; ix<vec.size(); ++ix)
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

// 用find_if()取代for循环
// 举例
int count_occurs(const vector<int> & vec, int val){
    vector<int>::const_iterator iter = vec.begin();
    int occurs_count = 0;
    while((iter = find(iter, vec.end(), val)) != vec.end()){
        ++occurs_count;
        ++iter; // 指向下一个元素
    }
    return occurs_count;
}

// 简化函数对象的参数
void test_transform_binary_param(){
    vector<int> number{1, 2, 3,4 ,5, 6};
    vector<int> result(number.size());
    transform(number.begin(),
                number.end(),
                number.begin(),
                result.begin(),
                multiplies<int>()
                );
    display(number, cout);
    display(result, cout);
}

int filter_less_than(const vector<int> & vec, 
                        int val, 
                        less_than<int> &lt){
    vector<int> nvec;
    vector<int>::const_iterator iter = vec.begin();

    while((iter = find_if(iter, vec.end(), bind2nd(lt, val))) != vec.end()){
        nvec.push_back(*iter);
        ++iter;
    }
    return nvec;
}

// 使类型通用化
template <typename InputIterator, typename OutputIterator,
          typename ElemType, typename Comp>
OutputIterator filter(InputIterator first, InputIterator last, 
           OutputIterator at, const ElemType &val, Comp pred){
    OutputIterator out = at;
    InputIterator iter=first;
    while((iter = find_if(iter, last, pred)) != last){
        *at++ = *iter++;
    }
    return out;
}

int main(){
    test_transform_one_param();
}
