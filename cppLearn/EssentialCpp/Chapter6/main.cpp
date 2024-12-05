#include <iostream>
#include <string>
#include "BinaryTree.h"

using namespace std;

void test()
{
    BinaryTree<string> bt;

    bt.insert("Piglet");
    bt.insert("Eeyore");
    bt.insert("Roo");
    bt.insert("Tigger");
    bt.insert("Chris");
    bt.insert("Pooh");
    bt.insert("Kanga");

    bt.preorder();
    // Piglet, Eeyore, Chris, Kanga, Roo, Pooh, Tigger

    bt.remove("Piglet");

    cout << "\n\nPreorder traversal after Piglet removal: \n";
    bt.preorder();
    // Roo, Pooh, Eeyore, Chris, Kanga, Tigger

    bt.remove("Eeyore");

    cout << "\n\nPreorder traversal after Eeyore removal: \n";
    bt.preorder();
    // Roo, Pooh, Kanga, Chris, Tigger
}

int main()
{
    test();
}
