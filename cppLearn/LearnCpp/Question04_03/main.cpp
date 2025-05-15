#include <iostream>

using namespace std;

/*
����ӷ֣�����е������ս�ԡ�

��дһ����̵ĳ�����ģ��������ϵ������Ĺ��̡����ȣ�ӦҪ���û��������ĸ߶ȣ�����Ϊ��λ������������Ϊ����������9.8 ��/��^2������û�г�ʼ�ٶȣ���ʼʱ���ƶ������ó����� 0��1��2��3��4 �� 5 �������������ĸ߶ȡ���Ӧ������£��߶�Ϊ 0����

ʹ�ú������� x �����ĸ߶ȡ��ú�������ʹ�����¹�ʽ���� x ���������ľ��룺�����½� = �������� * x_seconds^2 / 2

Ԥ�������

�������ߣ��ף���100
0 ��ʱ����ĸ߶�Ϊ��100 ��
1��ʱ����ĸ߶�Ϊ��95.1��
2 ��ʱ����ĸ߶�Ϊ��80.4 ��
�� 3 �룬��ĸ߶�Ϊ��55.9 ��
�� 4 ��ʱ����ĸ߶�Ϊ��21.6 ��
5��ʱ������ء�
ע�⣺�������ĸ߶ȣ�����ܲ����� 5 ���ڵ������ - û��ϵ�����ǽ���ѭ�����Ľ��������
ע�⣺^���Ų��� C++ �е�ָ����ʹ�ó˷�������ָ����ʵ�ֹ�ʽ��
ע�⣺���ס��˫����ʹ��˫�������֣�����2.0������2��
*/

void GetInput(float& height) 
{
	cout << "Please enter the height of towel:" << endl;
	cin >> height;
}

float DropDistance(float time, float gravity=9.8) 
{
	return (1.0f/2.0f) * gravity * time * time;
}

int main() 
{
	float height;
	GetInput(height);
	for (float time = 0.0; time <= 5.1; time += 1.0) 
	{
		float CurrentHeight = height - DropDistance(time);
		if (CurrentHeight < 0)
		{
			cout << "When " << time << "s, the ball is on the ground." << endl;
		}
		else 
		{
			cout << "When " << time << "s, the height of the ball is " << CurrentHeight << "." << endl;
		}
	}
	return 0;
}
