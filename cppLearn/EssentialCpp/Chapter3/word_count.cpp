#include<map>
#include<set>
#include<string>
#include<vector>
#include<list>
#include<iterator>
#include<algorithm>
#include<iostream>

using namespace std;

void test_iterator(){
    vector<int> input1{1, 2, 3};
    list<int> input2{4, 5, 6};
    vector<int> result;
    list<int> clone_list;
    // 用adapter代替iterator可以用push_back(),insert(),push_front()取代赋值
    unique_copy(input1.begin(), input1.end(),
                back_inserter(result));
    unique_copy(input1.begin(), input1.end(),
                inserter(result, input1.begin()));
    unique_copy(input2.begin(), input2.end(),
                front_inserter(clone_list));
}

void test_io_iterator(){
    vector<string> text;
    // 参数：输入流（不填即为eof）
    istream_iterator<string> is(cin);
    istream_iterator<string> eof;
    copy(is, eof, back_inserter(text));

    // 参数：输出流，分隔符
    ostream_iterator<string> os(cout, " ");
    copy(text.begin(), text.end(), os);

}

void test_word_count(){
    string in_word;
    map<string, int> word_count;
    set<string> word_exclusion;
    while(cin >> in_word){
        if (word_count.count(in_word))
            continue;
        if (word_count.count(in_word)){
            cout << in_word << " " << word_count[in_word] << endl;
        }
        ++word_count[in_word];
    }
    map<string, int>::iterator it = word_count.begin();
    for(;it != word_count.end(); ++it){
        cout << "Key: " << it->first << " "
             << "Value: " << it->second << endl;
    }
}

void test_iterator_input_output(){
    istream_iterator<string> is(cin);
    istream_iterator<string> eof;

    vector<string> text;
    copy(is, eof, back_inserter(text));

    sort(text.begin(), text.end());

    ostream_iterator<string> os(cout, " ");
    copy(text.begin(), text.end(), os);
}

int main(){
    test_iterator_input_output();
}
