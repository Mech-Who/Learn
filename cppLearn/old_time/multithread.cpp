#include <iostream>
#include <thread>

using namespace std;

void function1(char const c){
    for(int i = 0; i <200; i++){
        cout << c;
    }
}

void function2(){
    for(int i = 0; i <200; i++){
        cout << "-";
    }
}

int main(){
    thread worker1(function1, 'o');
    thread worker2(function2);
    worker1.join();
    worker2.join();
    system("pause>nul");
}