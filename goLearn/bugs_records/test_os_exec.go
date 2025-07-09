package main

import (
    "fmt"
    "log"
    "os/exec"
)

func main() {

    // Print Go Version
    cmdOutput, err := exec.Command("cmd", "/c", "test\\loop.bat").CombinedOutput()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("%s", cmdOutput)
}
