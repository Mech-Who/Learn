#include <iostream>
// #include <string>
#include <map>

using namespace std;

struct Entry
{
    string name;
    int value;
};

Entry read_entry(istream &is)
{
    string s;
    int i;
    is >> s >> i;
    return {s, i};
}

// 结构化绑定的另一种案例
void incr(map<string, int> &m)
{
    for (auto &[key, value] : m)
    {
        ++value;
    }
}

int main()
{
    auto e = read_entry(cin);
    cout << "{ " << e.name << " , " << e.value << " }\n";

    auto [n, v] = read_entry(cin);
    cout << "{ " << n << " , " << v << " }\n";
    return 0;
}
