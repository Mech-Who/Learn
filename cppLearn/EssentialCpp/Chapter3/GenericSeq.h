#include <vector>
#include <iostream>
#include <algorithm>

template <typename elemType>
elemType *find(const elemType *array, int size, const elemType &value);

template <typename elemType>
elemType *find(const elemType *array, const elemType *sentinel, const elemType &value);

template <typename elemType>
elemType *begin(const std::vector<elemType> &vec);

template <typename elemType>
elemType *end(const std::vector<elemType> &vec);

template <typename elemType>
void display(const std::vector<elemType> &vec, std::ostream &os=cout);

bool is_elem(std::vector<int> &vec, int elem);

std::vector<int> less_than_10(const std::vector<int> &vec);
std::vector<int> less_than(const std::vector<int> &vec, int less_than_val);
std::vector<int> filter(const std::vector<int> &vec,
                        int filter_val,
                        bool (*pred)(int, int));
bool less_than(int v1, int v2);
bool greater_than(int v1, int v2);
