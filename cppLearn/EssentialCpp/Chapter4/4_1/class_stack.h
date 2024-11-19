#include<string>
#include<vector>

class Stack;

void process(const Stack&);

class Stack
{
public:
    // public interface
    bool push(const std::string&);
    bool pop(std::string &elem);
    bool peek(std::string &elem);

    bool find(const std::string elem);
    int count(const std::string elem);

    bool empty(){ return _stack.empty(); }
    bool full(){ return _stack.max_size() == _stack.size(); }

    int size(){ return _stack.size();}
private:
    // private interface
    std::vector<std::string> _stack;
};
