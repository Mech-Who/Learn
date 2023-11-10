package main

import (
	"fmt"
)

func main() {
	// 数组的基础声明
	var int_array [10] int
	for i := 0; i < 10; i++ {
		int_array[i] = i + 1
		fmt.Println(int_array[i])
	}

	// 数组在声明的同时进行初始化
	var string_array =  [3]string{"apple", "banana", "cherry"}
	// 或者直接用 string_array := [3]string{"a", "b","c"}也是可以的
	for i, s := range string_array {
		fmt.Printf("第%d个字符串是:%s\n", i+1, s)
	}

	// 数组长度不确定时进行声明
	var float_array = [...]float64{1.0, 2.0, 3.0}
	for i, s := range float_array {
		fmt.Printf("第%d个浮点数是:%f\n", i+1, s)
	}

	// 多维数组
	var two_dimension_array = [2][2]int{{1,2}, {3,4}}
	for i := 0; i < 2; i++ {
		fmt.Printf("[")
		for j:=0;j<2;j++ {
			fmt.Printf("%d,", two_dimension_array[i][j])
		}
		fmt.Println("]")
	}

	// 向函数传递数组
	res := getAvg(int_array)
	fmt.Printf("avg: %f\n", res)
	fmt.Printf("int_array[0]: %d\n", int_array[0])
}

// 函数传递数组时，数组长度必须显式指定，因此一般不建议传数组
// 此外，不同于其他语言，go语言中，数组是值传递
// 即，函数内修改了数组，函数外的数组则不会被修改
func getAvg(arr [10]int) float32 {
	var avg, sum float32
	for i := 0; i < 10; i++ {
		sum += float32(arr[i])
	}
	avg = sum / 10
	arr[0] = 0
	return avg
}
