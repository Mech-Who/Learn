package main

import (
	"flag"
	"fmt"
	"strings"
)

// 返回的是一个指针变量
var n = flag.Bool("n", false, "omit trailing newline")	// 三个参数分别是：参数名， 默认值， 提示信息
var seq = flag.String("s", " ", "seperator")

/*
flag包，相当于python中的argparser包，让命令可以接收-n之类的参数
*/
func main() {
	flag.Parse()
	fmt.Print(strings.Join(flag.Args(), *seq))
	if !*n {
		fmt.Println()
	}
}
