#include <vector>
#include <list>
#include <iostream>

using namespace std;

// 因为不会修改vec，因此可以使用const声明
// 虽然可以不加const，也不会报错，但是使用const可以更好的说明我们是通过传址的方式来传递
// const表明我们是为了避免复制参数而不是为了要在函数中对它进行修改
void display(const vector<int> &vec, ostream &os = cout);

enum ns_type
{
    ns_fibon,
    ns_penta
};

// const object无需extern即可声明（“一次定义”下的特例）
const int seq_cnt = 2;
// const obejct* 需要extern才可声明
extern const vector<int> *(*seq_array[seq_cnt])(int);

// inline函数必须在头文件中定义（“一次定义”下的特例）
inline bool seq_elem(int pos, int &elem,
                     const vector<int> *(*seq_ptr)(int) = nullptr)
{
    if (!seq_ptr)
    {
        const string msg("Internal Error: seq_ptr is set to null!");
        display_message(msg);
        elem = 0;
        return false;
    }

    const vector<int> *pseq = seq_ptr(pos);

    if (!pseq)
    {
        const string msg("Internal Error: pseq is set to null!");
        display_message(msg);
        elem = 0;
        return false;
    }
    elem = (*pseq)[pos - 1];
    return true;
}

const vector<int> *fibon_seq(int size);
const vector<int> *penta_seq(int size);

inline bool is_size_ok(int size)
{
    const int max_size = 1024;
    const string msg("Requested size is not supported!");

    if (size < 0 || size > max_size)
    {
        display_message(msg, size);
        return false;
    }
    return true;
}

void display_message(char, ostream &os = cout);
void display_message(const string &, ostream &os = cout);
void display_message(const string &, int, ostream &os = cout);
template <typename elemType>
void display_message(const string &, const vector<elemType> &, ostream &os = cout);
template <typename elemType>
void display_message(const string &, const list<elemType> &, ostream &os = cout);