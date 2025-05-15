#include <iostream>

using namespace std;

/*
编写以下程序：要求用户输入 2 个浮点数（使用双精度数）。
然后要求用户输入以下数学符号之一： + 、 - 、 * 或 / 。
程序根据用户输入的两个数字计算答案并打印结果。
如果用户输入了无效符号，程序不应打印任何内容。

程序示例：

输入双精度值：6.2
输入双精度值：5
输入 +、-、* 或 /: *
6.2 * 5 等于 31
*/

void GetInput(float& x, float& y, char& op) 
{
	cout << "Please enter 2 float number in 'x y' format:" << endl;
	cin >> x >> y;
	cout << "Please enter an operator from [+, -, *, /]:" << endl;
	cin >> op;
}

void CalculateAndShow(float x, float y, char op) 
{
	float res;
	if ('+' == op) {
		res = x + y;
	}
	else if ('-' == op) {
		res = x - y;
	}
	else if ('*' == op) {
		res = x * y;
	}
	else if ('/' == op) {
		res = x / y;
	}
	else {
		return;
	}
	cout << x << " " << op << " " << y << " equals to " << res << endl;
}

int main() 
{
	float x, y;
	char op;
	GetInput(x, y, op);
	CalculateAndShow(x, y, op);
	return 0;
}
