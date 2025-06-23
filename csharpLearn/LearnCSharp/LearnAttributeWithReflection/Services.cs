// ==================== 2. 应用特性的示例类 ====================
[Documentation("员工信息管理器", Version = "2.3")]
public class EmployeeManager
{
    public string Name { get; set; } = "Unassigned";

    [TestCase(101, "Hello John")]
    public string Greet(string name) => $"Hello {name}";

    [TestCase(102, "42")]
    public int CalculateAnswer() => 42;
}

[Documentation("通用工具类")]
public class Utility
{
    [TestCase(201, "True")]
    public bool ValidateInput(string input) => !string.IsNullOrEmpty(input);
}
