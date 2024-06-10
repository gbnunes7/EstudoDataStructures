// Estrutura de dados: Pilha -> Uma coleção de itens ordenadas que seguem o princípio LIFO - last in, first out. Exemplos: Uma pilha de livros, ou uma pilha de bandedeijas. Onde os elementos mais antigos são a base, e os elementos mais novos são o topo, pode ser feito com dois adt, um array ou um objeto.
const prompt = require("readline-sync");

//Criação da Stack por meio de um Objeto

class Stack {
    constructor() { 
        this.count = 0 // Controle do tamanho da pilha
        this.items = {} // Inicializando por objeto
    }

    push(element) { // adiciona elemento no topo da pilha
        this.items[this.count] = element // push de elemento
        this.count++ // incremetador do tamanho da pilha
    }

    size() {
        return this.count //retorna tamanho da pilha
    }

    isEmpty() {
        return this.count === 0 // verificação se está vazia
    }

    pop() { // remover elemento do topo da stack
        if(this.isEmpty()) {
            return undefined // validação se está vazia
        }

        this.count-- // decrementa count para chegar no topo da pilha
        const topo = this.items[this.count] // declara em variável
        delete this.items[this.count] // deleta
        return topo // retorna o novo topo da stack
    }

    peek() { // retornar o topo da stack
        if(this.isEmpty()) {
            return undefined // validação se está vazia
        }

        return this.items[this.count -1] // retorna o topo da fila
    }

    clear() { // limpa a pilha redefinindo para o 0
        this.items ={} 
        this.count = 0
        // Outro Método
        // while(!= this.isEmpty()) {
        //     this.pop()
        // }
    }

    toString() { // passa pilha para string
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

const stackObjeto = new Stack();

stackObjeto.push(1)
stackObjeto.push(3)
stackObjeto.push(14)
stackObjeto.push(11)
stackObjeto.pop()
stackObjeto.push(98)

console.log(stackObjeto.isEmpty())
