class Stack {
    constructor() {
        this.items = []; //inicialização de items por array
    }

    push(element) {
        this.items.push(element); // método para adicionar item a stack
    }
    
    pop() {
        return this.items.pop() //método para remover item do topo da stack
    }

    peek() {
        return this.items[this.items.length - 1] // método para retornar o ultimo (topo) item da stack 
    }

    isEmpty() {
        return this.items.length === 0; // método para verificar em bool se a stack está vazia 
    }
    
    size() {
        return this.items.length; //método para retornar tamanho da stack
    }

    clear() {
        this.items =[] // método para limpar a stack
    }
}

const stackDeLivros = new Stack()

console.log(stackDeLivros.isEmpty())
stackDeLivros.push(1)
stackDeLivros.push(3)
stackDeLivros.push(1)

stackDeLivros.pop()
stackDeLivros.push(6)
stackDeLivros.push("André")
stackDeLivros.peek();

console.log(stackDeLivros.size())