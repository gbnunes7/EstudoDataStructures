// Queue (Fila) é uma estrutura de dados parecida com a Stack previamente estudada, porém segue o princípio FIFO (first in, first out). Parecido como uma ordem de chegada, cheguei primeiro numa fila, sai primeiro nessa fila. Em computação um exemplo é uma fila de impressão onde o primeiro documento que clico pra imprimir é o primeiro documento a ser impresso.
// Ao adicionar o elemento, ele é inserido na TAIL(cauda) da fila e quando removemos é removido na sua HEAD o elemento primeiramente inserido.

//criando a class Queue seguindo princípio FIFO

class Queue { 
    constructor(){
        this.count = 0; // controlador do tamanho da fila
        this.lowestCount = 0; // controlador do primeiro item a ser adicionado (para acessar o primeiro elemento da chave do objeto)
        this.items = {}; // inicializador da ED por Objeto
    }

    enqueue(element){ //adicionar elementos a fila
        this.items[this.count] = element; // definir chave (count) e valor do objeto (element)
        this.count++; // incrementando count (afim de deixar a vaga para outro elemento)
    }

    dequeue() { // remover primeiro elemento da fila, sempre usando FIFO
        if(this.isEmpty()) { // validação se a fila está vazia
            return undefined;
        }
        const result = this.items[this.lowestCount]; // declarando o primeiro obj com a chave, para poder retornar após remover
        delete this.items[this.lowestCount]; // removendo o primeiro elemento da fila
        this.lowestCount++; // incrementando o lowestCount, pois a chave 0 foi deletada
        return result;
    }

    size() { // retorna o tamanho da fila
        return this.count - this.lowestCount // subtrai count e o lowestCount para poder retonar o valor do size atual
    }

    isEmpty(){ // método para retornar se está vazia
        return this.size() === 0 // retorna se o tamanho da fila é igual a 0
    } 

    peek(){ // método para retornar o primeiro elemento da fila
        if(this.isEmpty()) { // validação se a fila está vazia
            return undefined
        }
        return this.items[this.lowestCount] // retorna o primeiro elemento da fila 
    }

    clear(){ // método para limpar a fila
        this.count = 0 //reatribuindo todos as variaveis para as iniciais
        this.lowestCount = 0
        this.items = {}
    }

    toString() { // método para retornar o objeto em tipo string
        if (this.isEmpty()) { // validação se a fila está vazia
            return "";
        }
        let objString = `${this.items[this.lowestCount]}` // declarar uma objString com a primeira chave (lowestCount = 0) usando let para ser reatribuida em todas as chaves
        for (let i = this.lowestCount + 1 ; i <this.count; i++) { // iteração para passar em todos os itens do objeto
            objString = `${objString}, ${this.items[i]}` // reatribuindo o valor objString com "this.lowestCount + 1"  somando com o valor do objString anterior this.tems[this.lowestCount], onde ele acessa todas os items do meu objeto e retorna como string
        }
        return objString // retorna os itens do meu objeto como String
    }
}

const filaDePessoas = new Queue() 


filaDePessoas.enqueue("João") // adicionando elementos a fila
filaDePessoas.enqueue("Márcio")
filaDePessoas.enqueue("Joana")

filaDePessoas.dequeue() // removendo elemento da fila (item com chave 0, primeiro a entrar)

console.log(filaDePessoas)
console.log(filaDePessoas.peek())
console.log(filaDePessoas.toString())
console.log(filaDePessoas.isEmpty())
console.log(filaDePessoas.size())
filaDePessoas.clear()
console.log(filaDePessoas)