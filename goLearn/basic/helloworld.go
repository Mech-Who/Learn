// 一个文件夹只能有一个包名
package main

// 引入标准库模块fmt（format），用于打印输出
import (
	"fmt"
	"unsafe"
)

/*
  多行注释：
  本程序是初学者测试代码。
  多用于练习。
  go run *.go 可以编译执行该文件
  go build *.go 可以编译并生成*.exe文件
  go install url 可以下载其他内容
  go get url 相当于git等工具拉取代码，要求本机先安装了这些工具
  go fmt *.go 可以格式化go语言的代码文件
 */
func main() {  // 左大括号不得单独出现在一行
	// 打印输出Hello，World！字符串
	// 字符串连接可以通过“+”号实现
	fmt.Println("Hello" + "," + "World!")  // 语句末尾无需分号分隔，除非一行有多个语句

	// 变量声明，不指定类型，会自动判定变量类型，相当于c++的auto
	var stockcode = 123
	var enddate = "2023-06-03"
	// %d表示整型数字，%s表示字符串
	var url = "Code=%d&endDate=%s"
	// Sprintf 根据格式化参数生成格式化的字符串并返回该字符串。
	var target_url = fmt.Sprintf(url, stockcode, enddate)
	fmt.Println(target_url)
	// Printf 根据格式化参数生成格式化的字符串并写入标准输出。
	fmt.Printf(url, stockcode, enddate)
	// Println 不提供参数可以输出一个空行
	fmt.Println()

	// 声明含类型的变量
	var number int = 0
	var str string = "strings"
	// 不同类型需要类型转换，至少int到string没有自动类型转换
	fmt.Println(number, str)
	// 一次声明多个变量
	var n1, n2 int = 1, 2
	// 通过逗号传入的参数，输出时会用空格隔开
	fmt.Println(n1, n2)
	// 不做初始化的变量，默认值：数字为零值，布尔为false，字符串为空字符串""
	// 默认值为nil的有：指针、数组、map类型、切片、函数、接口
	var default_int int
	var default_string string
	var default_bool bool
	fmt.Println(default_int, default_string, default_bool)
	// 声明变量的语法糖，只能在变量第一次被声明时使用，否则会产生编译错误
	// 同时，此语法糖只能在函数体中使用
	int_val, str_val := 1, "a"
	fmt.Println(int_val, str_val)
	// =只能对已赋值的变量使用
	var int_v1, int_v2 int
	int_v1, int_v2 = 1, 2
	// 如果你声明了一个局部变量却没有在相同的代码块中使用它，会得到编译错误
	fmt.Println(int_v1, int_v2)
	// 因式分解写法，常用于全局变量声明
	var (
		global_v1 int
		global_v2 string
		global_v3 bool
	)
	// 全局变量是允许声明但不使用的
	fmt.Println(global_v1, global_v2, global_v3)

	// 值类型和引用类型
	// 值类型：		int、float、bool、string
	// 引用类型：	除了值类型以外的引用类型

	// 空白标识符 _ 也被用于抛弃值, 避免因为接收函数返回值但是又没有使用产生编译错误
	int_v1, _ = 5, 7
	fmt.Println(int_v1)

	// 常量，声明时进行初始化，初始化后不可修改，支持类型自动推断
	const ZERO = 0
	const HELLO string = "hello, world"
	fmt.Println(ZERO, HELLO)
	// 常量可以用作枚举
	const(
		MALE = 1
		FEMALE = 2
		UNKNOWN = 3
	)
	fmt.Println(MALE, FEMALE, UNKNOWN)
	// 常量赋值时可以使用len(), cap(), unsafe.Sizeof()函数计算表达式的值
	// 常量表达式中，函数必须是内置函数，否则编译不过
	const (
		a_str = "abc"
		b_len = len(a_str)
		c_size = unsafe.Sizeof(a_str)
	)
	// println似乎是内置函数
	println(a_str, b_len, c_size)

	// iota，特殊常量，可以认为是一个可以被编译器修改的常量
	/* 
	 iota 在 const关键字出现时将被重置为 0(const 内部的第一行之前)
	 ，const 中每新增一行常量声明将使 iota 计数一次
	 (iota 可理解为 const 语句块中的行索引)
	*/
	const (
		a = iota   //0
		b          //1
		c          //2
		d = "ha"   //独立值，iota += 1
		e          //"ha"   iota += 1
		f = 100    //iota +=1
		g          //100  iota +=1
		h = iota   //7,恢复计数
		i          //8
	)
	fmt.Println(a, b, c, d, e, f, g, h, i)
	// iota的一个有意思的示例
	const (
		j=1<<iota 	//1<<0，左移 0 位，不变仍为 1
		k			//1<<1，左移 1 位，1*2=2
		l			//1<<2，左移 2 位，1*2*2=4
		m			//1<<3，左移 3 位，1*2*2*2=8
	)
	println(j, k, l, m)

	// 运算符
	// 基础运算
	add_v1, add_v2 := 1, 2
	println(add_v1 + add_v2)
	sub_v1, sub_v2 := 4, 2
	println(sub_v1 - sub_v2)
	mul_v1, mul_v2 := 8, 9
	println(mul_v1 * mul_v2)
	div_v1, div_v2 := 9, 3
	println(div_v1 / div_v2)
	mod_v1, mod_v2 := 3, 2
	println(mod_v1 % mod_v2)
	// 自增自减不能在函数传参时使用
	self_add := 1
	self_add++
	println(self_add)
	self_sub := 2
	self_sub--
	println(self_sub)
	// 比较
	eq1, eq2 := 1, 1
	println(eq1 == eq2)
	ne1, ne2 := 1, 2
	println(ne1 != ne2)
	gt1, gt2 := 2, 1
	println(gt1 > gt2)
	lt1, lt2 := 1, 2
	println(lt1 < lt2)
	ge1, ge2 := 2, 2
	println(ge1 >= ge2)
	le1, le2 := 2, 2
	println(le1 <= le2)
	// 逻辑
	and1, and2 := true, false
	println(and1 && and2)
	or1, or2 := false, false
	println(or1 || or2)
	not := true
	println(!not)
	// 位运算符
	var a_val uint = 60      /* 60 = 0011 1100 */  
	var b_val uint = 13      /* 13 = 0000 1101 */
	var c_val uint = 0          
	c_val = a_val & b_val       /* 12 = 0000 1100 */
	fmt.Printf("第一行 - c_val 的值为 %d\n", c_val )
	c_val = a_val | b_val       /* 61 = 0011 1101 */
	fmt.Printf("第二行 - c_val 的值为 %d\n", c_val )
	c_val = a_val ^ b_val       /* 49 = 0011 0001 */
	fmt.Printf("第三行 - c_val 的值为 %d\n", c_val )
	c_val = a_val << 2     /* 240 = 1111 0000 */
	fmt.Printf("第四行 - c_val 的值为 %d\n", c_val )
	c_val = a_val >> 2     /* 15 = 0000 1111 */
	fmt.Printf("第五行 - c_val 的值为 %d\n", c_val )
	// 赋值运算符，即运算符和赋值符的语法糖
	a_val = 21
	c_val =  a_val
	fmt.Printf("第 1 行 - =  运算符实例，c_val 值为 = %d\n", c_val )
	c_val +=  a_val
	fmt.Printf("第 2 行 - += 运算符实例，c_val 值为 = %d\n", c_val )
	c_val -=  a_val
	fmt.Printf("第 3 行 - -= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val *=  a_val
	fmt.Printf("第 4 行 - *= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val /=  a_val
	fmt.Printf("第 5 行 - /= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val = 200
	c_val <<=  2
	fmt.Printf("第 6行  - <<= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val >>=  2
	fmt.Printf("第 7 行 - >>= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val &=  2
	fmt.Printf("第 8 行 - &= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val ^=  2
	fmt.Printf("第 9 行 - ^= 运算符实例，c_val 值为 = %d\n", c_val )
	c_val |=  2
	fmt.Printf("第 10 行 - |= 运算符实例，c_val 值为 = %d\n", c_val )
	// 取址和寻值
	var a_int int = 21
	var ptr *int
	ptr = &a_int
	fmt.Printf("a_int 的值为  %d\n", a_int)
	fmt.Printf("*ptr 的值为  %d\n", *ptr)
	/*
		运算符优先级（5最高，1最低）：
		5.	* / % << >> & &^
		4.	+ - | ^
		3.	== != < <= > >=
		2.	&&
		1.	||
		可以通过使用括号来临时提升某个表达式的整体运算优先级
	*/

	// 流程控制
	// if
	if true {
		println(399 / 7.0)
	}
	// switch
	a_int = 1
	switch a_int {
	case 1:
		println("case 1")
	case 2:
		println("case 2")
	default:
		println("default")
	}
	// type switch
	var x_interface interface{}
	switch t := x_interface.(type){
	case nil:
		fmt.Printf("nil: %T\n", t)
	case int:
		println("int")
	case float64:
		println("float64")
	case func(int) float64:
		println("func(int) float64")
	case bool, string:
		println("bool or string")
	default:
		println("unknown")
	}
	// fallthrough: 
	// 使用 fallthrough 会强制执行后面的 case 语句，
	// fallthrough 不会判断下一条 case 的表达式结果是否为 true。
	// break:
	// 终止后续case的执行
	// default可以写在前面也可写在后面，但是一定是最后执行
	switch {
    case false:
            fmt.Println("1、case 条件语句为 false")
            fallthrough
    case true:
            fmt.Println("2、case 条件语句为 true")
            fallthrough
    case false:
            fmt.Println("3、case 条件语句为 false")
            break
    case true:
            fmt.Println("4、case 条件语句为 true")
    case false:
            fmt.Println("5、case 条件语句为 false")
            fallthrough
    default:
            fmt.Println("6、默认 case")
    }
	// for， 后面可接条件、传统for循环结构、range
	sum := 0
	for i := 0; i <= 10; i++ {
		sum += i
	}
	fmt.Println(sum)
	// 无限for循环,即不提供条件
	for {
		sum++ // 无限循环下去
		if sum >= 20 {
			println("break")
			break
		}
	 }
	// for-each range
	strings := []string{"google", "runoob"}
	for i, s := range strings {
		fmt.Println(i, s)
	}
	// break可以中断循环
	// continue可以跳过本次循环的后续操作
	// goto控制转移到标记语句，既可以实现break功能，也可以实现continue功能，不推荐使用
}
