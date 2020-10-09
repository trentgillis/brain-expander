package main

func main() {
	cards := newDeckFromFile("mycards")
	cards.shuffle()
	cards.print()
}
