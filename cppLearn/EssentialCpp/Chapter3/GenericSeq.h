#include <vector>
#include <iostream>

using namespace std;

template <typename elemType>
elemType *find(const elemType *array, int size, const elemType &value);

template <typename elemType>
elemType *find(const elemType *array, const elemType *sentinel, const elemType &value);

template <typename elemType>
elemType *begin(const vector<elemType> &vec);

template <typename elemType>
elemType *end(const vector<elemType> &vec);

template <typename elemType>
void display(const vector<elemType> &vec, ostream &os=cout);
