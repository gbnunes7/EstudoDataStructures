// Estrutura de dados: Pilha -> Uma coleção de itens ordenadas que seguem o princípio LIFO - last in, first out. Exemplos: Uma pilha de livros, ou uma pilha de bandedeijas. Onde os elementos mais antigos são a base, e os elementos mais novos são o topo, pode ser feito com dois adt, um array ou um objeto.

// Criação da Stack (pilha) por meio do método class, usando um array.
const prompt = require("readline-sync");
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

const stackDeLivros = new Stack() // Instanciando a minha pilha para uma constante.
const numero = prompt.question("Qual o número?")
//testes para verificar se os métodos estão funcionando
console.log(stackDeLivros.isEmpty())
stackDeLivros.push(1)
stackDeLivros.push(3)
stackDeLivros.push(1)

stackDeLivros.pop()
stackDeLivros.push(6)
stackDeLivros.push("André")
stackDeLivros.peek();
console.log(numero)
console.log(stackDeLivros.size())

