#include <cstddef> // for offsetof()
#include <iostream>
using namespace std;

#pragma pack(4)
struct S{
    int x;      // 4
    char y;     // 1+3
    int z;      // 4
    double a;   // 8
};

int main(){
    cout << offsetof(S, x) << endl; // 0
    cout << offsetof(S, y) << endl; // 4
    cout << offsetof(S, z) << endl; // 8
    cout << offsetof(S, a) << endl; // 16 添加`#pragma pack(4)`之后为12
}
