#include <iostream>
using namespace std;

int main()
{
    // 刷新输出缓冲区
    cout << endl << "---operators---" << endl;
    cout << "hello" << endl; // +\n
    cout << "hello" << ends; // +'\0'
    cout << "hello" << flush; // 什么都不加

    // unitbuf操作符 与 nounitbuf操作符
    cout << endl << "---unitbuf---" << endl;
    cout << unitbuf;
    cout << "hello" << "hello" << "hello";
    cout << "hello";
    cout << "hello";
    cout << "hello";
    cout << endl << "---nounitbuf---" << endl;
    cout << nounitbuf;
    cout << "hello" << "hello" << "hello";
    cout << "hello";
    cout << "hello";
    cout << "hello";

    // 流之间的关联--tie()函数
    cout << endl << "---tie---" << endl;
    ostream *old_tie = cout.tie(&cerr);
    cerr << "hello" << endl;
    cout.tie(old_tie);
    cerr << "hello" << endl;

    return 0;
}