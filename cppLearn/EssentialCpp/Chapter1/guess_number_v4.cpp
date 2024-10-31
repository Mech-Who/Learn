/*
 * @Author: HuShuhan 873933169@qq.com
 * @Date: 2024-10-31 12:49:59
 * @LastEditors: HuShuhan 873933169@qq.com
 * @LastEditTime: 2024-10-31 20:28:30
 * @FilePath: \EssentialCpp\Chapter1\guess_number.cpp
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

using namespace std;

const int seq_size = 8;
const int seq_count = 6;

vector<int> fib_seq{1, 1, 2, 3, 5, 8, 13, 21};
vector<int> lucas_seq{1, 3, 4, 7, 11, 18, 29, 47};
vector<int> pell_seq{1, 2, 5, 12, 29, 70, 169, 408};
vector<int> tri_seq{1, 3, 6, 10, 15, 21, 28, 36};
vector<int> squa_seq{1, 4, 9, 16, 25, 36, 49, 64};
vector<int> penta_seq{1, 5, 12, 22, 35, 51, 70, 92};

vector<int> *seq_addrs[seq_count] = {
    &fib_seq, &lucas_seq, &pell_seq,
    &tri_seq, &squa_seq, &penta_seq};

main(int argc, char *argv[])
{
    int first_num = 1;
    int second_num = 1;
    const int max_guess = 10;
    int guess_count = 0;
    int right_count = 0;
    int wrong_count = 0;
    bool still_guess = true;
    vector<int> *current_seq = nullptr;
    int guess_index = 2;

    while (guess_count < seq_size - 2 && still_guess)
    {
        // 随机选择数列
        int seq_index = rand() % seq_count;
        current_seq = seq_addrs[seq_index];
        if (current_seq == nullptr && current_seq->empty() && (*current_seq)[guess_index] == 0)
            cout << "[System Error] Invalid Sequence for seq_index is '" << seq_index << "' !";
            break;
        // 根据数列设置题目
        first_num = (*current_seq)[guess_index - 2];
        second_num = (*current_seq)[guess_index - 1];
        int answer = (*current_seq)[guess_index];
        cout << "Pre numbers are " << first_num << " " << second_num << ".\n";
        cout << "Please guess next number:";
        int user_guess;
        cin >> user_guess;

        // 判断结果
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

        // 是否进行下一轮
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

    // 显示得分
    double correct_rate = 0.0;
    correct_rate = right_count / (guess_count * 1.0);
    cout << "Current guess count is " << guess_count << ", and you got correct for " << right_count << "times!\n";
    cout << "Correct rate is " << correct_rate << "%!\n";
}
