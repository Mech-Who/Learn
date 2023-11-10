package main

import (
	"fmt"
	"os"
)

/*
标准库os

命令行参数
*/
func main() {
	cmd_name := os.Args[0]
	fmt.Printf("cmd name: %s\n", cmd_name)

	cmd_param := os.Args[1:]
	for i, p := range cmd_param {
		fmt.Printf("第%d个参数是: %s\n", i+1, p)
	}
}
