package main

import (
	"fmt"
)

/*
接口：

	接口可以让我们将不同的类型绑定到一组公共的方法上，从而实现多态和灵活的设计。

	Go 语言中的接口是隐式实现的，也就是说：
		如果一个类型实现了一个接口定义的所有方法，那么它就自动地实现了该接口。
		因此，我们可以通过将接口作为参数来实现对不同类型的调用，从而实现多态。

格式：

type interface_name interface {
	method_name1 [return_type]
}
*/

type Phone interface {
	call()
}

type MyPhone struct {
}

func (mp MyPhone) call() {
	fmt.Println("I am MyPhone, calling!")
}

type NkPhone struct {
}

func (np NkPhone) call() {
	fmt.Println("I am NkPhone, calling!")
}

func main() {
	var phone Phone

	phone = new(NkPhone)
	phone.call()

	phone = new(MyPhone)
	phone.call()
}
