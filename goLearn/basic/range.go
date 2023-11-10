package main

import (
	"fmt"
)

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}

	kvs := map[string]int{"apple": 1, "banana": 2}
	for k, v := range kvs {
		fmt.Printf("key: %s, value: %d\n", k, v)
	}
}
