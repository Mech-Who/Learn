#include <iostream>

using namespace std;

/*
��д���³���Ҫ���û����� 2 ����������ʹ��˫����������
Ȼ��Ҫ���û�����������ѧ����֮һ�� + �� - �� * �� / ��
��������û�������������ּ���𰸲���ӡ�����
����û���������Ч���ţ�����Ӧ��ӡ�κ����ݡ�

����ʾ����

����˫����ֵ��6.2
����˫����ֵ��5
���� +��-��* �� /: *
6.2 * 5 ���� 31
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
