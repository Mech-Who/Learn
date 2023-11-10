package main

import (
	"fmt"
	"strings"
	"os"
)

/*
标准库strings
*/
func main() {
	full_cmd := ""
	full_cmd = strings.Join(os.Args[:], " ")
	fmt.Println(full_cmd)
}
