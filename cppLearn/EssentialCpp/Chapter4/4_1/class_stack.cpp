#include "class_stack.h"

using namespace std;

bool Stack::push(const string &elem){
    if(this->full())
        return false;
    _stack.push_back(elem);
    return true;
}

bool Stack::pop(string &elem){
    if(this->empty())
        return false;
    elem = _stack.back();
    _stack.pop_back();
    return true;
}

bool Stack::peek(string &elem){
    if(this->empty())
        return false;
    elem = _stack.back();
    return true;
}

bool Stack::find(const string elem){
    if (this->empty())
        return false;
    for(int ix=0; ix<this->size(); ++ix){
        if (elem == _stack[ix])
            return true;
    }
    return false;
}

int Stack::count(const string elem){
    if (this->empty())
        return 0;
    int c = 0;
    for(int ix=0; ix<this->size(); ++ix){
        if (elem == _stack[ix])
            ++c;
    }
    return c;
}
