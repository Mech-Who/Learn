#include <iostream>
#include <vector>
#include <string>

// 前置声明
template <typename Type>
class BinaryTree;

template <typename valType>
class BTnode
{
    friend class BinaryTree<valType>;

public:
    BTnode(const valType &val);

    void insert_value(const valType &elem);
    void lchild_leaf(BTnode *leaf, BTnode *subtree);
    void remove_value(const valType &val, BTnode *&prev);

    void display_val(const valType &val, std::ostream &os = std::cout) const;
    void preorder(BTnode *pt, std::ostream &os = std::cout) const;
    void inorder(BTnode *pt, std::ostream &os = std::cout) const;
    void postorder(BTnode *pt, std::ostream &os = std::cout) const;

private:
    valType _val;
    int _cnt;
    BTnode *_lchild;
    BTnode *_rchild;
};

template <typename elemType>
class BinaryTree
{
    friend std::ostream &operator<<(std::ostream &os, const BinaryTree<elemType> &bt)
    {
        os << "Tree: " << std::endl;
        bt.print(os);
        return os;
    }

public:
    BinaryTree();
    BinaryTree(const BinaryTree &bt);
    ~BinaryTree();
    BinaryTree &operator=(const BinaryTree &bt);

    bool empty() { return _root == nullptr; }
    // 公开接口，具体实现通过private函数实现
    void clear()
    {
        if (_root)
        {
            clear(_root);
            _root = nullptr;
        }
    }
    void insert(const elemType &elem);
    void remove(const elemType &elem);
    void remove_root();

    void preorder() const;
    void inorder() const;
    void postorder() const;

private:
    BTnode<elemType> *_root;
    // src 复制到 tar
    void copy(BTnode<elemType> *tar, BTnode<elemType> *src);
    // clear的具体实现（private接口）
    void clear(BTnode<elemType> *pt);
    void print(std::ostream &os = std::cout) const;
};
