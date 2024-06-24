class Stack {

    constructor() {
        this.items = []
    }

    add(element) {
        this.items.push(element)
    }

    remove(element) {
        this.items.pop(element)
    }

    peek() {
        return this.items[this.items.length -1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }

}

const pilhaDeLivro = new Stack()

pilhaDeLivro.add("O príncipe")
pilhaDeLivro.add("A baleia")
pilhaDeLivro.add("O arrombado")
pilhaDeLivro.remove()
pilhaDeLivro.add("O príncipe")
pilhaDeLivro.add("A baleia")
pilhaDeLivro.add("O arrombado")



console.log(pilhaDeLivro.isEmpty())