package main

import (
	"fmt"
)

/* 使用 make 函数 */
// map_variable := make(map[KeyType]ValueType, initialCapacity)

func main() {
	// 定义
	m1 := make(map[string]int)
	m2 := make(map[string]int, 10)
	m3 := map[string]int{"apple": 1, "banana": 2, "cherry": 3}
	// 遍历键和值
	for k, v := range m1 {
		fmt.Printf("key: %s, -value: %d\n", k, v)
	}
	// 仅遍历键
	for k := range m2 {
		fmt.Printf("key: %s\n", k)
	}
	// 仅遍历值
	for _, v := range m3 {
		fmt.Printf("value: %d\n", v)
	}
	// 获取元素
	v1 := m3["apple"]
	fmt.Printf("v1: %d\n", v1)
	// 修改元素
	m3["apple"] = 11
	fmt.Printf("m3['apple']: %d\n", m3["apple"])
	// 获取map长度
	len := len(m3)
	fmt.Printf("m3 len: %d\n", len)
	// 删除元素
	delete(m3, "apple")
	for k, v := range m3 {
		fmt.Printf("key: %s, value: %d\n", k, v)
	}
}
