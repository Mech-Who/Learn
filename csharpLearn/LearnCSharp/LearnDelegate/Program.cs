using System;

namespace Learn
{
    // 声明委托类型（传统方式）
    public delegate int BinaryOperation(int a, int b);

    class Program
    {
        // 1. 定义兼容的方法
        static int Add(int x, int y) => x + y;
        static int Multiply(int x, int y) => x * y;

        static void Main()
        {
            // 2. 实例化委托（传统方式）
            BinaryOperation operation = new BinaryOperation(Add);
            Console.WriteLine($"Addition: {operation(5, 3)}"); // 输出 8

            // 3. 委托重新赋值（指向Multiply方法）
            operation = Multiply;
            Console.WriteLine($"Multiplication: {operation(5, 3)}"); // 输出 15

            // 4. 多播委托（组合多个方法）
            operation += Add; // 此时委托执行列表：Multiply -> Add
            Console.WriteLine($"Multicast Result: {operation(5, 3)}"); // 输出15 (只返回最后结果)

            // 5. 现代C#语法（Func委托 + Lambda表达式）
            Func<int, int, int> modernOperation = (a, b) => a - b;
            Console.WriteLine($"Lambda: {modernOperation(5, 3)}"); // 输出2

            // 6. 委托作为参数传递
            CalculateAndPrint(10, 2, Divide); // 输出 "Division: 5"

            // 7. 使用内置Action委托（无返回值）
            Action<string> logger = message => Console.WriteLine($"[LOG] {DateTime.Now}: {message}");
            logger("Operation completed");
        }

        static int Divide(int a, int b) => b != 0 ? a / b : 0;

        // 方法接受委托作为参数
        static void CalculateAndPrint(int x, int y, BinaryOperation op)
        {
            Console.WriteLine($"Division: {op(x, y)}");
        }
    }
}