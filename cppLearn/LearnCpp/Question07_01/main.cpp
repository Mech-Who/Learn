#include <iostream>

using namespace std;

/*
编写一个程序，要求用户输入两个整数，一个名为 smaller，另一个名为 larger。如果用户为第二个整数输入较小的值，请使用数据块和临时变量来交换较小的值和较大的值。然后打印较小和较大变量的值。向代码添加注释，指示每个变量的终止位置。注： 打印值时，无论输入顺序如何， 较小的值应包含较小的输入， 较大的值应包含较大的输入。

程序输出应与以下内容匹配：

Enter an integer: 4
Enter a larger integer: 2
Swapping the values
The smaller value is 2
The larger value is 4
*/

void swap(int& a, int& b)
{
	int temp = a;
	a = b;
	b = temp;
}

int main() 
{
	int smaller, larger;
	cout << "Enter an integer: ";
	cin >> smaller;
	cout << "Enter a larger integer: ";
	cin >> larger;
	if (smaller > larger) {
		cout << "Swapping the values" << endl;
		swap(smaller, larger);
	}
	cout << "The smaller value is " << smaller << endl;
	cout << "The larger value is " << larger << endl;
	return 0;
}
