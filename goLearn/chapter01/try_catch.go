package main

import (
	"fmt"
	"errors"
)

/*
Go 语言通过内置的Error接口提供了非常简单的错误处理机制。
Error接口如下：

type error interface {
	Error() string
}

*/

/*
我们可以在编码中通过实现 error 接口类型来生成错误信息。
函数通常在最后的返回值中返回错误信息。
使用 errors.New 可返回一个错误信息：
*/
func Sqrt(f float64) (float64, error) {
	if f < 0 {
		return 0, errors.New("math: square root of negative number")
	}
	return 1, nil
}

func main() {
	res, err := Sqrt(4)
	fmt.Println(res, err)
	res, err = Sqrt(-1)
	fmt.Println(res, err)
}
