#include <vector>
#include <memory>

using namespace std;

class Shape
{
};

class Circle : public Shape
{
};

class Smiley : public Circle
{
private:
    vector<unique_ptr<Shape>> eyes;
    unique_ptr<Shape> mouth;
};

enum class Kind
{
    circle = 1
};

unique_ptr<Shape> read_shape(istream &is) // 从流is内读取形状描述
{
    Kind k;
    string type;
    is >> type;
    if (type == "circle")
        k = Kind::circle;
    switch (k)
    {
    case Kind::circle:
        return unique_ptr<Shape>{new Circle{}};
    };
}