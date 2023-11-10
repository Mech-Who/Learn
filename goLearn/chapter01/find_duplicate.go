package main

import (
	"fmt"
	"bufio"
	"io/ioutil"
	"os"
	"strings"
)

// 从标准输入读取
func duplicate1() {
	counts := make(map[string]int)
	input := bufio.NewScanner(os.Stdin)
	for input.Scan() {
		counts[input.Text()]++
	}
	// 注意: 忽略input.Err()中可能的错误
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%s\t%d\n", line, n)
		}
	}
}

// 从文件读取
func duplicate2() {
	counts := make(map[string]int)
	files := os.Args[1:]
	if len(files) == 0 {
		countLines(os.Stdin, counts)
	} else {
		for _, file := range files {
			f, err := os.Open(file)  // 尝试打开文件流
			if err != nil {  // 异常处理
				fmt.Fprintf(os.Stderr, "duplicate2: %v\n", err)
				continue
			}
			countLines(f, counts)
			f.Close()  // 关闭文件
		}
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%s\t%d\n", line, n)
		}
	}
}

func countLines(f *os.File, counts map[string]int) {
	input := bufio.NewScanner(f)
	for input.Scan() {
		counts[input.Text()]++
	}
	// 忽略input.Err()中可能的错误
}

// 一次读取输入到大块内存，一次性地分割所有行，然后处理这些行。
// 需要引入io/ioutil包
func duplicate3() {
	counts := make(map[string]int)
	for _, filename := range os.Args[1:] {
		// 返回一个 可以转化成字符串 的 字节slice
		data, err := ioutil.ReadFile(filename)
		if err != nil {  // 异常处理
			fmt.Fprintf(os.Stderr, "duplicate3: %v\n", err)
			continue
		}
		// 转成字符串并以'\n'为分隔符分割
		for _, line := range strings.Split(string(data), "\n") {
			counts[line]++
		}
	}
	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%s\t%d\n", line, n)
		}
	}
}

func duplicate4() {
	dup_file := make([]string)
	files := os.Args[1:]
	if len(files) == 0 {
		if countFile(os.Stdin) {
			append(dup_file, "os.Stdin")
		}
	} else {
		for _, file := range files {
			f, err := os.Open(file)
			if err != nil {
				fmt.Fprintf(os.Stderr, "duplicate4: %v\n", err)
				continue
			}
			res := countFile(f)
			if res {
				append(dup_file, file)
			}
			f.Close()
		}
	}
	for _, filename := range dup_file {
		fmt.Printf("%s\n", filename)
	}
}

func countFile(f *os.File) bool {
	input := bufio.NewScanner(f)
	counts := make(map[string]int)
	for input.Scan() {
		counts[input.Text()]++
	}
	if len(counts) > 0 {
		return true
	}
	return false
}

func main() {
	duplicate4()
}
