#include <iostream>
#include <string>
#include <string_view>

/*
������Ա #1 ��������John Bacon
����Լ������������䣺37 ��
����� 2 ���˵�������David Jenkins
���� David Jenkins �����䣺44 ��
������ղ��˹ (44 ��) ��Լ������� (37 ��) �곤��
*/

void GetPerson(std::string& name, int& age)
{
	std::cout << "������Ա��������";
	std::getline(std::cin >> std::ws, name);
	std::cout << "����" << name << "�����䣺";
	std::cin >> age;

	std::cout << std::endl;
}

void CompareAge(std::string_view name1, int age1, std::string_view name2, int age2)
{
	std::string_view BigName, SmallName;
	int BigAge, SmallAge;
	if (age1 > age2)
	{
		BigAge = age1;
		BigName = name1;
		SmallAge = age2;
		SmallName = name2;
	}
	else if (age1 < age2)
	{
		BigAge = age2;
		BigName = name2;
		SmallAge = age1;
		SmallName = name1;
	}
	else 
	{
		std::cout << name1 << "(" << age1 << "��)��" << name2 << "(" << age2 << "��)һ����" << std::endl;
		return;
	}
	std::cout << BigName << "(" << BigAge << "��)��" << SmallName << "(" << SmallAge << "��)�곤��" << std::endl;
}

int main() 
{
	std::string name1, name2;
	int age1, age2;
	GetPerson(name1, age1);
	GetPerson(name2, age2);
	CompareAge(name1, age1, name2, age2);
	return 0;
}
