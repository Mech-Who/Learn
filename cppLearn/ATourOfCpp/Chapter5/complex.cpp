// 具体类型
class complex
{
    double re, im;

public:
    complex(double r, double i) : re{r}, im{i} {}
    complex(double r) : re{r}, im{0} {}
    complex() : re{0}, im{0} {}
    complex(complex &z) : re{z.re}, im{z.im} {}

    double real() const { return re; }
    void real(double d) { re = d; }
    double imag() const { return im; }
    void imag(double d) { im = d; }

    complex &operator+=(complex z)
    {
        re += z.re;
        im += z.im;
        return *this;
    }

    complex &operator-=(complex z)
    {
        re -= z.re;
        im -= z.im;
        return *this;
    }

    complex &operator*=(complex z);
    complex &operator/=(complex z);

    complex operator+(complex z) { return *this += z; }
    complex operator-(complex z) { return *this -= z; }
    complex operator*(complex z) { return *this *= z; }
    complex operator/(complex z) { return *this /= z; }

    bool operator==(complex z) const
    {
        return real() == z.real() && imag() == z.imag();
    }
    bool operator!=(complex z) const
    {
        return !(*this == z);
    }
};

complex &complex::operator*=(complex z)
{
    double r = re * z.re - im * z.im;
    im = re * z.im + im * z.re;
    re = r;
    return *this;
}

complex &complex::operator/=(complex z)
{
    double r = re * z.re - im * z.im;
    im = re * z.im + im * z.re;
    re = r;
    return *this;
}
