#include <vector>
#include <string>
#include <deque>
#include <list>
#include <forward_list>
#include <array>

/*
vector&string

list&forward_list

deque&vector&string

forward_list&array
*/

class Sales_data{
    int id;
};

auto list = std::list<Sales_data>();
auto deque = std::deque<double>();

std::vector<std::vector<std::string>> lines;
