#include <algorithm>
#include <vector>
#include <random>

int main() {
    int val = 42;
    auto vec = std::vector<int>({10});
    auto result = std::find(vec.cbegin(), vec.cend(), val);
    return 0;
}
