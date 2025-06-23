/**
- Value types
    - bool
    - byte
    - char
    - decimal
    - double
    - float
    - int
    - long
    - byte
    - short
    - uint
    - ulong
    - ushort
- Reference types
    - objcet
    - dynamic
    - String 
        - 语法糖：@""
- Pointer types
    - type*

sizeof(type)

- (type)value
- Convert
- Parse
- TryParse

*/
namespace Learn
{
    public class Fahrenheit
    {
        public double Degrees { get; set; }

        public Fahrenheit(double degrees)
        {
            Degrees = degrees;
        }

        // 隐式转换从Fahrenheit到double
        public static implicit operator double(Fahrenheit f)
        {
            return f.Degrees;
        }

        // 显式转换从double到Fahrenheit
        public static explicit operator Fahrenheit(double d)
        {
            return new Fahrenheit(d);
        }
    }

    class TypeSystem
    {
        public static void TypeSystemMain()
        {
            Fahrenheit f = new Fahrenheit(98.6);
            Console.WriteLine("Fahrenheit object: " + f.Degrees + " degrees");

            double temp = f; // 隐式转换
            Console.WriteLine("After implicit conversion to double: " + temp + " degrees");

            Fahrenheit newF = (Fahrenheit)temp; // 显式转换
            Console.WriteLine("After explicit conversion back to Fahrenheit: " + newF.Degrees + " degrees");
        }
    }
}
