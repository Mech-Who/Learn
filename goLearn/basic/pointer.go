package main

import (
	"fmt"
)

func main() {
	var ip *int
	var a int = 20
	ip = &a
	// 指针ip存储地址
	fmt.Printf("a's address: %x\n", ip)
	// 通过指针ip访问值
	fmt.Printf("a's value: %d\n", *ip)

	// 空指针
	// nil在概念上和其它语言的null、None、nil、NULL一样，都指代零值或空值。
	// nil指针也就是空指针
	var ptr *int
	fmt.Printf("ptr的值为: %x\n", ptr)
	if ptr == nil {
		println("空指针！")
	} else {
		println("非空指针！")
	}

	// 指针数组（数组元素是指针）
	var ptr_arr [3]*int
	var int_arr = [3]int{1, 2, 3}
	for i := 0; i < 3; i++ {
		ptr_arr[i] = &int_arr[i]
		fmt.Printf("ptr[%d]=%d\n", i, *ptr_arr[i])
	}

	// 指向指针的指针
	var ptr_ptr **int
	ptr_ptr = &ip
	fmt.Printf("a: %d\n", a)
	fmt.Printf("ip: %d\n", *ip)
	fmt.Printf("ptr_ptr: %d\n", **ptr_ptr)

	// 向函数传递指针参数
	a, b := 9, 10
	ap, bp := &a, &b
	fmt.Printf("a:%d, b:%d\n", a, b)
	swap(ap, bp)
	fmt.Printf("a:%d, b:%d\n", a, b)
}

func swap(x *int, y *int) {
	var temp int
	temp = *x    /* 保存 x 地址的值 */
	*x = *y      /* 将 y 赋值给 x */
	*y = temp    /* 将 temp 赋值给 y */
 }
