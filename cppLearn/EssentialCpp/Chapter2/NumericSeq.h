#include <vector>
#include <list>
#include <iostream>

using namespace std;

void display(const vector<int> &vec, ostream &os = cout);

inline bool fibon_elem(int pos, int &elem){
    const vector<int> *pseq = fibon_seq(pos);

    if (!pseq){
        elem = 0;
        return false;
    }
    elem = (*pseq)[pos-1];
    return true;
}

const vector<int> *fibon_seq(int size);

inline bool is_size_ok(int size) {
    const int max_size = 1024;
    if (size < 0 || size > max_size){
        cerr << "fibon_seq(): oops: invalid size:"
             << size << " -- can't fulfill request.\n";
        return false;
    }
    return true;
}

void display_message(char ch);
void display_message(const string&);
void display_message(const string&, int);
void display_message(const string&, int, int);

template <typename elemType>
void display_message(const string&, const vector<elemType> &vec, ostream& os=cout);

template <typename elemType>
void display_message(const string&, const list<elemType> &vec, ostream& os=cout);