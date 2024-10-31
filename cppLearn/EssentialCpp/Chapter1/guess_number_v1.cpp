/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-10-31 12:49:59
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-10-31 12:50:08
 * @FilePath: \EssentialCpp\Chapter1\guess_number.cpp
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include <iostream>
#include <string>
#include <vector>

using namespace std;

const int seq_size = 18;

vector<int> fib_seq{seq_size};
vector<int> lucas_seq{seq_size};
vector<int> pell_seq{seq_size};
vector<int> tri_seq{seq_size};
vector<int> squa_seq{seq_size};
vector<int> penta_seq{seq_size};

int main(int argc, char *argv)
{
    int user_guess;
    int first_num = 1;
    int second_num = 1;
    cout << "Pre numbers are " << first_num << " " << second_num << ".\n";
    cout << "Please guess next number:";
    cin >> user_guess;
    if (user_guess == 2)
    {
        cout << "Congratulations! Nice guess! You're right!";
    }
    else
    {
        cout << "Sorry, nice try, but the answer is wrong!\n";
    }
}
