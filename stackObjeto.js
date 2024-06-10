// Estrutura de dados: Pilha -> Uma coleção de itens ordenadas que seguem o princípio LIFO - last in, first out. Exemplos: Uma pilha de livros, ou uma pilha de bandedeijas. Onde os elementos mais antigos são a base, e os elementos mais novos são o topo, pode ser feito com dois adt, um array ou um objeto.

//Criação da Stack por meio de um Objeto

class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element
        count++
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0
    }

    pop() {
        if(this.isEmpty) {
            return undefined
        }

        this.count--
        const topo = this.items[this.count]
        delete this.items[this.count]
        return topo
    }

    peek() {
        if(this.isEmpty) {
            return undefined
        }

        return this.items[this.count -1]
    }

    clear() {
        this.items ={}
        this.count = 0
        // Outro Método
        // while(!= this.isEmpty()) {
        //     this.pop()
        // }
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.items}`
        for (let i = 1; i < this.count ; i++) {
            objString = `${objString},${this.items}`
        }
        return objString
    }
}
