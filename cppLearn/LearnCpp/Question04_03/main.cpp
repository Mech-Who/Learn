#include <iostream>

using namespace std;

/*
额外加分：这个有点更具挑战性。

编写一个简短的程序来模拟球从塔上掉下来的过程。首先，应要求用户输入塔的高度（以米为单位）。假设重力为正常重力（9.8 米/秒^2），球没有初始速度（开始时球不移动）。让程序在 0、1、2、3、4 和 5 秒后输出球离地面的高度。球不应落入地下（高度为 0）。

使用函数计算 x 秒后球的高度。该函数可以使用以下公式计算 x 秒后球下落的距离：距离下降 = 重力常数 * x_seconds^2 / 2

预期输出：

输入塔高（米）：100
0 秒时，球的高度为：100 米
1秒时，球的高度为：95.1米
2 秒时，球的高度为：80.4 米
第 3 秒，球的高度为：55.9 米
第 4 秒时，球的高度为：21.6 米
5秒时，球落地。
注意：根据塔的高度，球可能不会在 5 秒内到达地面 - 没关系。我们讲完循环后会改进这个程序。
注意：^符号不是 C++ 中的指数。使用乘法而不是指数来实现公式。
注意：请记住对双精度使用双精度文字，例如2.0而不是2。
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
