template <typename T>
class val_class
{
public:
    val_class(const T &v): _val(v) {}
    // 返回const类对象值和函数操作属性const保持一致
    const T val() const { return _val; }
    // 如果不准备返回const对象，则函数也不是const操作
    T val() { return _val; }
private:
    T _val;
};
