#include <vector>

struct Point
{
    double x;
    double y;
};

class Shape
{
public:
    virtual Point center() const = 0;
    virtual void move(Point to) = 0;

    virtual void draw() const = 0;
    virtual void rotate(int angle) = 0;

    virtual ~Shape() {}
};

class Triangle : public Shape
{
};

class Circle : public Shape
{
public:
    Circle(Point p, int rad) : x{p}, r{rad} {}
    Point center() const override { return x; }
    void move(Point to) override { x = to; }
    void draw() const override;
    void rotate(int) override {}

private:
    Point x; // 圆心
    int r;   // 半径
};

class Smiley : public Circle
{
public:
    Smiley(Point p, int rad) : Circle{p, rad}, mouth{nullptr} {}
    ~Smiley()
    {
        delete mouth;
        for (auto p : eyes)
            delete p;
    }

    void move(Point to) override;

    void draw() const override;
    void rotate(int) override;

    void add_eye(Shape *s)
    {
        eyes.push_back(s);
    }

    void set_mouth(Shape *s);
    virtual void wink(int i);

private:
    std::vector<Shape *> eyes;
    Shape *mouth;
};


int main() {
    Shape* ps;
    // 如果转换成功返回对应类型指针，否则返回nullptr
    if (Smiley* p = dynamic_cast<Smiley*>(ps)){
        // 动态类型转换成功
    }else{
        // 动态类型转换失败
    }
    return 0;
}