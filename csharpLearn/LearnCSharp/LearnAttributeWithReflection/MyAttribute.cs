/**


*/

// ==================== 1. 自定义特性定义 ====================
[AttributeUsage(AttributeTargets.All, AllowMultiple = true, Inherited = true)]
/// <summary>记录Bug调试信息</summary>
class DebugInfo : Attribute
{
    private int BugNo { get; set; }
    private string Developer { get; set; }
    private string LastReview { get; set; }
    private string Message { get; set; }
    public DebugInfo(int bugNo, string developer, string lastReview, string message)
        => (BugNo, Developer, LastReview, Message) = (bugNo, developer, lastReview, message);
};

/// <summary>标记需要文档化的类</summary>
[AttributeUsage(AttributeTargets.Class)] // 限制特性只能用于类
public sealed class DocumentationAttribute : Attribute
{
    public string Description { get; }
    public string Version { get; set; } = "1.0";

    public DocumentationAttribute(string description)
        => Description = description;
}

/// <summary>标记需要测试的方法</summary>
[AttributeUsage(AttributeTargets.Method)] // 限制特性只能用于方法
public sealed class TestCaseAttribute : Attribute
{
    public int TestId { get; }
    public string ExpectedResult { get; }

    public TestCaseAttribute(int id, string expected)
        => (TestId, ExpectedResult) = (id, expected);
}

