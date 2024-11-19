#include<iostream>
#include"class_stack.h"

using namespace std;

void fill_stack(Stack &stack, istream &is=cin){
    string str;
    while(is >> str && !stack.full()){
        stack.push(str);
    }
    cout << "Read in " << stack.size() << " elements" << endl;
}

void empty_stack(Stack &stack, ostream &os=cout){
    while(!stack.empty()){
        string str;
        stack.pop(str);
        cout << "stack pop: " << str << endl;
    }
}

int main() {
    Stack s;
    cout << "Please input the string to stack(End with ^Z):" << endl;
    fill_stack(s);
    cout << "Please input the string to count(End with enter):" << endl;
    string counter;
    // 用于清空缓存区，避免后续cin被跳过
    cin.clear();
    // cin.sync();
    cin >> counter;
    int count = s.count(counter);
    cout << "Element '" << counter << "' has shown for " << count <<" times." << endl;
    cout << "Please input the string to find(End with enter):" << endl;
    cin.clear();
    // cin.sync();
    cin >> counter;
    if (s.find(counter)){
        cout << "Element '" << counter << "' has been found." << endl;
    }else {
        cout << "Element '" << counter << "' doesn't exist." << endl;
    }
    cout << "Starting empty the stack..." << endl;
    empty_stack(s);
}
