/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-10-31 12:49:59
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-10-31 19:57:55
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

int main(int argc, char *argv[])
{
    int first_num = 1;
    int second_num = 1;
    const int max_guess = 10;
    int guess_count = 0;
    int right_count = 0;
    int wrong_count = 0;
    bool still_guess = true;
    const int seq_size = 18;
    vector<int> seq{seq_size};
    seq[0] = 1;
    seq[1] = 1;
    int guess_index = 2;
    while (guess_count < seq_size - 2 && still_guess)
    {
        first_num = seq[guess_index - 2];
        second_num = seq[guess_index - 1];
        int answer = first_num + second_num;
        seq[guess_index] = answer;
        cout << "Pre numbers are " << first_num << " " << second_num << ".\n";
        cout << "Please guess next number:";
        int user_guess;
        cin >> user_guess;

        ++guess_count;
        if (user_guess == answer)
        {
            ++guess_index;
            ++right_count;
            cout << "Congratulations! Nice guess! You're right!\n";
        }
        else
        {
            ++wrong_count;
            cout << "Sorry, nice try, but the answer is wrong!\n";
        }

        cout << "Still wanna try another guess? Y/N\n";
        char continue_choice;
        cin >> continue_choice;
        switch (continue_choice)
        {
        case 'y':
        case 'Y':
            break;
        case 'n':
        case 'N':
            still_guess = false;
            break;
        }
    }

    float correct_rate = right_count / guess_count;
    cout << "Current guess count is " << guess_count << ", and you got correct for " << right_count << "times!\n";
    cout << "Correct rate is " << correct_rate << "%!\n";
}
