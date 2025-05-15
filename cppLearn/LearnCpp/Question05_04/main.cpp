#include <iostream>
#include <string>
#include <string_view>

/*
输入人员 #1 的姓名：John Bacon
输入约翰·培根的年龄：37 岁
输入第 2 个人的姓名：David Jenkins
输入 David Jenkins 的年龄：44 岁
大卫·詹金斯 (44 岁) 比约翰·培根 (37 岁) 年长。
*/

void GetPerson(std::string& name, int& age)
{
	std::cout << "输入人员的姓名：";
	std::getline(std::cin >> std::ws, name);
	std::cout << "输入" << name << "的年龄：";
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
		std::cout << name1 << "(" << age1 << "岁)与" << name2 << "(" << age2 << "岁)一样大。" << std::endl;
		return;
	}
	std::cout << BigName << "(" << BigAge << "岁)比" << SmallName << "(" << SmallAge << "岁)年长。" << std::endl;
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
