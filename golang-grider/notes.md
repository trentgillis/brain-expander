# Go: The Complete Developer's Guide

This file contains all of the notes taken during the completion of the **Go: The Complete Developers Guide** course by Stephen Grider on Udemy. 

## Section 1: Getting Started

* This section was pretty much just a tribute the the greatness that is VSCode

## Section 2: A Simple Start

* Below is an example of a "Hello World" Go program
```golang
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
```
* In the above program a few questions can be asked and answered
  1. How do we run a Go program?
    * The Go CLI provides a variety of commands we can use to run our program
      * `go build` compiles a bunch of Go source code files. It results in an executable file that we can then run with `./`
      * `go run` compiles and executes one or two go files
      * `go fmt` formats all the code in each file in the directory
      * `go install` compiles and installs a Go package
      * `go get` downloads the raw source code of someone elses package
      * `go test` runs any tests associated with the current project
  2. What does `package main` mean?
    *  A `package` can be thought of as a project or a workspace. It is a collection of common source code files.
    *  The only requirement for a file to a part of a `package` is that it declares that `package` that it is a part of at the top of the file
    * There are two different types of packages in Go
      1. **Executable**: Generates a file that we can then run
      2. **Reusable**: Code used as 'helpers'. This is a good place to put reusable logic
        * It is the name of the package that we use that determines the type of package that we are using. In our example, it is the word `main` that determines that we are creating an executable type package
        * The `main` word is "sacred" in Go in that it is the word that allows us to create a package the results in some executable code.
        * Any time we are using an executable type package, we must have a `main` function
  3. What does `import "fmt"` mean?
    * The `import` statement is used to give our package access to some code written inside of a different package.
    * For example, `import "fmt"` gives us access to the code in all of the code inside of the `fmt` package
      * The `fmt` package is a standard library package included with the Go programming language by default. It is used to print out different information to the terminal for things like debugging
    * We can see documentation for all of the standard library packages included with go on the Golang site [here](https://golang.org/pkg)
  4. What is that `func` thing?
    * `func` (big surprise) is short of function. We declare functions in our code using the `func` keyword
  5. How is the `main.go` file organized?
    * Every file will follow the same structure. At the top we declare our package what we want the file to be a part of. We then put our import statements for the packages that we need. We then declare our functions and tell Go to do things