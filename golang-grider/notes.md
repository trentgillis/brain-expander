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

## Section 3: Deeper Into Go

#### Variable Declarations
* We can declare variables using the `var` keyword. For example:
```golang
var card string = "Ace of Spades"
```
* Go is a statically typed language, meaning that whenever we declare a variable, we need to assign a type
* Like `TypeScript`, when we assign a variable in Go, the type is inferred from the declaration so the above line can be written
```golang
var card = "Ace of Spades"
```
* Alternatively, we can use the `:=` syntax to declare a variable for the first time, which tells the compiler to figure out the type
  * This can only be done within a function and can only be done as part of initial variable assignment
```golang
card := "Ace of Spades"
```
* From the Golang documentation
```
Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type.
```

#### Functions and Return Types
* We have to inform the Go complier whenever we create a new function, what type of data that function will be returning
  * Think C and Java like functions; we are required to provide the return data type
* The syntax for creating a function that returns a string is as follows:
```golang
func newCard() string {
	return "Five of Diamonds"
}
```

#### Slices
* The `array` type in Go is a fixed length list (C like array)
* the `slice` type in Go is a list that and grow and shrink in size
  * Below is an example of creating a slice in Go
```golang
cards := []string{"Ace of Diamonds", newCard()}

// To append a new card to the cards slice, we can use the append function
// Note that append does not mutate the existing slice so we must reassign our appended slice to the variable we want it stored in
cards = append(cards, "Six of Spades")
```
* Every record in an array or a slice must be of the same type
* We can iterate over the elements in a slice using the following code (it's a weird looking for loop)
```golang
for i, card := range cards {
  fmt.Println(card)
}
```

#### Object Oriented Approach vs Go Approach
* Go is NOT an OO language. There is no concept of classes in Go
* With the Go approach, we are going to take a base type and extend it's functionality
  * We can do this with using functions that have our new type as the receiver (think method on that type)

#### Custom Type Declarations
* An example of declaring a new type can be seen by the following code:
```golang
// The following declares a new type named deck that extends the []string type
// If all we have is the following, then type deck === []string
type deck []string
```
* We have the ability to add additional functions to our types by providing a receiver to our functions
  * For example, by adding the following, we give all variables of type deck access to the print method we define
  ```golang
  func (d deck) print() {}
  ```
* The `d` in the receiver is the actual copy of the deck we're working with and can be accessed by referencing `d` in the method
  * The `d` argument can be thought of as `this` or `self` from other languages
  * By convention, we refer to the receiver with a 1 or 2 letter abbreviation that matches the type of the receiver. So above, because our type is deck, we name the receiver d
* The `deck` keyword specifies that every variable of type `deck` can call this function on itself
* Whenever we want to ignore the usage of a variable, we can replace it with an `_`, which tells the Go compiler that we know there's a variable there, we just don't care about it
* To access a range of values within a slice, we can use the following syntax
```golang
fruits := []string{"apple", "banana", "grape", "orange"}

// fruits[startIndexIncluding : upToNotIncluding]
fruits[0:2] // -> ["apple", "banana"]
fruits[:2] // -> ["apple", "banana"]
fruits[2:] // -> ["grape", "orange"]
```

#### Multiple Return Types
* Below is an example of a function with required parameters
  * Notice that we pass the variable name followed by the type for parameters in the function signature
```golang
func deal(d deck, handSize int) {}
```
* We can specify multiple returns types from a method by passing declaring multiple types within parentheses in the function signature
* To capture all values returned by functions with multiple return values, we can capture the variables with a comma separated list of variables
* Example of multiple return types:
```golang
// Function with multiple return types
func deal(d deck, handSize int) (deck, deck) {
  return d[:handSize], d[handSize:]
}

// Capturing the values from a function will multiple return types
func main() {
  cards := newDeck() // From another file of the main package
  hand, remainingCards := deal(cards, 5) // both hand and remainingCards will be of type deck
}
```

#### Go File IO
* To perform file IO in Go, we can make use of the `ioutil` package
  * IO util documentation: [Golang Docs](https://golang.org/pkg/io/ioutil/)
* A byte slice (`[]byte`) is a slice where every element inside of it corresponds to an ASCII character code
  * Its a more computer friendly way of thinking of a string

#### Type Conversion
* Take one a value of one type and turn it into another. For example:
```golang
[]byte("Hi there!")
```
* To turn our `deck` type into a byte slice we're going to do the following conversion: `deck -> []string -> string -> []byte`

#### Testing in Go
* Go testing does not require any external frameworks
  * We get a small set of interfaces that we can use to test our Go code as an included part of the language
  * To create a test in Go, we simply need to create a new file ending in `_test.go`
  * We can run out test files using `go test`
* An example of a Go test is as follows:
```golang
func TestNewDeck(t *testing.T) {
	d := newDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck length of 16, but got %v", len(d))
	}
}
```

## Section 4: Organizing Data With Structs
* Go gives us access to the `struct` data structure
  * A `struct` is a collection of properties that are related together
  * With our sick JS background, we can think of structs as plain JS objects
* Struct example:
```golang
package main

type person struct {
  firstName string
  lastName  string
}

func main {
  alex := person{"Alex", "Anderson"} // relies on ordering of properties in struct def
  // -- or --
  alex := person{ // More explicit way of declaring variables from struct types
    firstName: "Alex",
    lastName: "Anderson"}
  // -- or --
  var alex person // Empty with manual entry
  alex.firstName = "Alex"
  alex.lastName = "Anderson"
}
```
* When we create a variable in Go and do not assign it a value, it receives a zero value
  * A zero value is an initial value given to unassigned value, for example, string types receive the zero value of `""` and int types get the zero value `0`
* We can create nested structs as well
  * For example:
  ```golang
  type contactInfo struct {
    email string
    zipCode int
  }

  type person struct {
    firstName string
    lastName string
    contact contactInfo
  }
  ```

#### Pointers
* Go is a pass by value language, meaning that when a value is passed into a function, Go takes the value/struct and copies the data from the struct into a new location in memory and uses that copy for the functions execution
* Pointer operators:
  * `&variable` - Give me the memory address of the value this variable is pointing at
    * Turn value into address with `&value`
  * `*pointer` - Give me the value this memory address is pointing at
    * Turn address into value with `*address`
  * Seeing the `*` in from of a type is much different than in front of a variable. `*person` would say that we're working with a pointer to a person while `*pointerToPerson` is an operator meaning that we want to manipulate the value the pointer is referencing
* In Go, if we define a function with a receiver with a pointer type, we can call that method with either a pointer to our type *or* just our type as we normally would. Go will figure it out for us
* Slices under the hood
  * When we create a slice, Go sets up a couple of data structures for us
    1. The slice which consists of 3 elements: a pointer to the head of the slice, the capacity of the slice, and the length of the slice
    2. An array containing all of the elements of the slice
  * When passing a slice to a function, it is still passed by value, but it's pointer to head value points to the same location as the original array, resulting modifications to the slice's records persisting even when it looks like we're not passing by reference
  * Slices are what are known a a reference type because it is a reference to another structure in memory
    * We don't care if we're using copies of reference types because those types always reference their values in memory via a pointer anyways
* When working with reference types, we don't need to worry about using pointers
  * Reference types include `slices`, `maps`. `channels`, `pointers` and `functions`
* When working with value types, we need to worry about using pointers
  * Value types include `int`, `float`, `string`, `bool` and `structs`