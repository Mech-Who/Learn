#include <iostream>

using namespace std;

/*
��дһ������Ҫ���û���������������һ����Ϊ smaller����һ����Ϊ larger������û�Ϊ�ڶ������������С��ֵ����ʹ�����ݿ����ʱ������������С��ֵ�ͽϴ��ֵ��Ȼ���ӡ��С�ͽϴ������ֵ����������ע�ͣ�ָʾÿ����������ֹλ�á�ע�� ��ӡֵʱ����������˳����Σ� ��С��ֵӦ������С�����룬 �ϴ��ֵӦ�����ϴ�����롣

�������Ӧ����������ƥ�䣺

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
