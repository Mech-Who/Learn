using System.Reflection;

/**
 Reflection

 - Assembly
    - static GetExecutingAssembly
    - GetTypes
 - Type
    - GetCustomAttribute
    - GetMethods
    - GetParameters
    - Invoke
 - Activator
    - static CreateInstance
*/

// ==================== 3. 反射处理引擎 ====================
public static class ReflectionEngine
{
    /// <summary>发现并处理带特性的类和方法</summary>
    public static void AnalyzeAssembly()
    {
        // 获取当前程序集
        var assembly = Assembly.GetExecutingAssembly();

        Console.WriteLine("=========== [Start analyzing assembly] ===========");

        // 查找所有应用了DocumentationAttribute的类
        foreach (var type in assembly.GetTypes())
        {
            var classAttr = type.GetCustomAttribute<DocumentationAttribute>();
            if (classAttr == null) continue;

            Console.WriteLine($"\n🏷️ 发现文档化类: {type.Name}");
            Console.WriteLine($"• 描述: {classAttr.Description}");
            Console.WriteLine($"• 版本: {classAttr.Version}");
            Console.WriteLine("🔍 扫描测试方法...");

            // 在类中查找带测试特性的方法
            ProcessTestMethods(type);
        }

        Console.WriteLine("=========== [End analyzing assembly] ===========");
    }

    private static void ProcessTestMethods(Type type)
    {
        Console.WriteLine("===== [Start analyzing method] =====");
        foreach (var method in type.GetMethods())
        {
            var testAttr = method.GetCustomAttribute<TestCaseAttribute>();
            if (testAttr == null) continue;

            Console.WriteLine($"\n🛠️ 测试方法: {method.Name}");
            Console.WriteLine($"• 测试ID: {testAttr.TestId}");
            Console.WriteLine($"• 预期结果: {testAttr.ExpectedResult}");

            // 动态执行无参方法并验证结果
            if (method.GetParameters().Length == 0)
            {
                var instance = Activator.CreateInstance(type);
                var result = method.Invoke(instance, null);
                Console.WriteLine($"✅ 执行结果: {result}");
                Console.WriteLine(result.ToString() == testAttr.ExpectedResult
                    ? "🎉 测试通过!"
                    : "❌ 测试失败!");
            }
        }
        Console.WriteLine("===== [End analyzing method] =====");
    }
}
