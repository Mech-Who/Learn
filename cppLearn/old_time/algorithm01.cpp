#include<algorithm>

// 顺序容器
#include<vector>
#include<deque>
#include<list>
#include<forward_list>
#include<array>
#include<string>

using namespace std;


int main(){
    std::deque<int> list;
}

bool find_bool(vector<int>::iterator iter_begin, vector<int>::iterator iter_end, int number){
    for(auto iter = iter_begin; iter != iter_end; ++iter){
        if(*iter == number)
            return true;
    }
    return false;
}

vector<int>::iterator find_int(vector<int>::iterator iter_begin, vector<int>::iterator iter_end, int number){
    auto iter = iter_begin;
    for(; iter != iter_end; ++iter){
        if(*iter == number)
            return iter;
    }
    return iter;
}