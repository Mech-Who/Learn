package main

import (
	"fmt"
	"strconv"
)

func main() {
	// 数字类型转换
	sum := 17
	count := 5
	mean := float32(sum)/float32(count)
	fmt.Println(mean)

	// 字符串转换
	str := "10"
	num, _ := strconv.Atoi(str)  // str 2 int
	fmt.Println(num)
	str := strconv.Itoa(num)  // int 2 str
	fmt.Println(str)
	num, err := strconv.ParseFloat(str, 64)
	fmt.Println(num)
	str := strconv.FormatFloat(num, "f", 2, 64)
	fmt.Println(str)

	// 接口类型转换
	var i interface{} = "Hello, World"
	str, ok := i.(string)
	fmt.Println(str)
}
