#include "Book.h"

using namespace std;

void print(const LibMat &mat)
{
    cout << "in global print(): about to print mat.print()\n";

    mat.print();
}

void test1()
{
    LibMat mat;
    print(mat);
    Book book("Alice in wonderland", "unknown");
    print(book);
}

int main(){}
