package main

import (
	"fmt"
	"math"
)

func main() {
	// 函数
	/*
	func function_name( [parameter list] ) [return_types] {
		函数体
	}
	*/
	res := max(1, 2)
	println("最大值：", res)
	// 函数变量, 这种方式可以实现回调函数
	getSquareRoot := func(x float64) float64 {
		return math.Sqrt(x)
	}
	fmt.Println(getSquareRoot(9))
	// 闭包
	/* 
	nextNumber 为一个函数，函数 i 为 0 
	调用 nextNumber 函数，i 变量自增 1 并返回
	*/
	nextNumber := getSequence()
	fmt.Println(nextNumber())
	fmt.Println(nextNumber())
	fmt.Println(nextNumber())

	/* 创建新的函数 nextNumber1，并查看结果 */
	nextNumber1 := getSequence()  
	fmt.Println(nextNumber1())
	fmt.Println(nextNumber1())

	/* 
		Go 语言中同时有函数和方法。
		一个方法就是一个包含了接受者的函数，
		接受者可以是命名类型或者结构体类型的一个值或者是一个指针。
		所有给定类型的方法属于该类型的方法集。
	*/
	var c1 Circle
	c1.radius = 10.00
	fmt.Println("圆的面积=", c1.getArea())

	
	// 变量作用域
	/*
	1. 函数内定义的变量称为 局部变量
	在函数体内声明的变量称之为局部变量，它们的作用域只在函数体内，参数和返回值变量也是局部变量。

	2. 函数外定义的变量称为 全局变量
	Go 语言程序中全局变量与局部变量名称可以相同，但是函数内的局部变量会被优先考虑。

	3. 函数定义中的变量称为 形式参数
	形式参数会作为函数的局部变量来使用。
	*/
}

/* 定义结构体 */
type Circle struct {
	radius float64
}

//该 method 属于 Circle 类型对象中的方法
func (c Circle) getArea() float64 {
	//c.radius 即为 Circle 类型对象中的属性
	return 3.14 * c.radius * c.radius
}

func max(num1 int, num2 int) int {
	var result int
	if num1 > num2 {
		result = num1
	} else {
		result = num2
	}
	return result
}

// 匿名函数，作为闭包
// 匿名函数的优越性在于可以直接使用函数内的变量，不必申明。
func getSequence() func() int {
	i:=0
	return func() int {
	   i+=1
	  return i  
	}
 }