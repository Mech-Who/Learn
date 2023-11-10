package main

import (
	"fmt"
)

func main() {
	// 声明
	var islice []int  // 看上去就是不加长度的数组声明
	var islice2 []int = make([]int, 2)
	islice3 := make([]int, 2)
	islice4 := make([]int, 2, 3)  // 指定容量
	fmt.Println(islice, islice2, islice3, islice4)

	// 初始化
	s := []int{1, 2, 3}  // []代表是切片类型，{}则是初始化值，len=cap=3
	fmt.Println(s)
	d := s[:]  // 实现数组转切片
	fmt.Println(d)
	a := d[1:2]  // [startIndex:endIndex]

	// len和cap函数
	fmt.Println(len(a), cap(a))

	// 空切片
	if islice == nil {
		fmt.Println("空切片！")
	}

	// 切片截取
	// slice[start:end]

	// append和copy函数
	// 如果想增加切片的容量，我们必须创建一个新的更大的切片并把原分片的内容都拷贝过来。
	islice = append(islice, 1, 2, 3, 4)
	fmt.Println(islice)
	// copy(dst, src)
	copy(islice2, islice)  // islice 复制给 islice2, 但容量不够的话会损失数据
	fmt.Println(islice2)
}
