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
#include <fstream>

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

    string username;
    cout << "Please type your name:";
    cin >> username;

    string filename = "seq_data.txt";
    ifstream infile(filename);
    if (!infile)
    {
        cerr << "[System Error] Open '" << filename << "' file failed" << endl;
    }
    else
    {
        string name;
        int count_num;
        int correct_num;

        while (infile >> name)
        {
            infile >> count_num >> correct_num;
            if (name == username)
            {
                guess_count = count_num;
                right_count = correct_num;
            }
        }
    }

    while (still_guess)
    {
        // 随机抽题
        int guess_index = rand() % (seq_size - 2) + 2;
        // 随机选择数列c
        int seq_index = rand() % seq_count;
        cout << seq_index << endl;
        current_seq = seq_addrs[seq_index];
        if (current_seq == nullptr || current_seq->empty() || (*current_seq)[guess_index] == 0) {
            cerr << "[System Error] Invalid Sequence for seq_index is '" << seq_index << "' !" << endl;
            break;
        }
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
            wrong_count = 0;
            cout << "[Correct!] Congratulations! Nice guess! You're right!\n";
        }
        else
        {
            switch(wrong_count++){
                case 0:
                    cout << "[Wrong Answer] Sorry, nice try!\n";
                    break;
                case 1:
                    cout << "[Wrong Answer] Keep trying! You can do this!\n";
                    break;
                case 2:
                    cout << "[Wrong Answer] Well, That's not a big deal! Just keep trying! Nothing is impossible!\n";
                    break;
                default:
                    cout << "[Wrong Answer] Don't give up! Try it again!\n";
            };
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
    if (guess_count > 0)
        correct_rate = right_count / (guess_count * 1.0);
    cout << "Current guess count is " << guess_count << ", and you got correct for " << right_count << " times!\n";
    cout << "Correct rate is " << correct_rate << "%!\n";

    ofstream outfile(filename, ios_base::app);
    if (!outfile)
    {
        cerr << "[System Error] open file '" << filename << "' failed!" << endl;
    }
    else
    {
        outfile << username << ' '
                << guess_count << ' '
                << right_count << endl;
    }
}
