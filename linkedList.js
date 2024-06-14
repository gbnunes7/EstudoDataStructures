// LinkedList, são listas (arrays) que tem seu tamanho não fixo, e sim dinâmicos. Diferentemente de um array clássico seus elementos não são contíguos(coadjuvantes um ao outro), e sim constituidos por nodes. Nodes são armazenados pelo próprio elemento e uma referência(ponteiro ou ligação).

// Ex: Um vagão de trêm: Cada vagão do trem seria um Node, constituídos do vagão própriamente dito(elemento) e uma ligação métalica (ponteiro) para o próximo vagão(Node) e nisso é constituido um trêm (LinkedList)

// Nosso primeiro Nó de uma linked list é chamada de head, para encontrar outros nós de uma linked list é necessário iterar pela cabeça.

//Criação de uma linked list 

class Node { // nó da linked list
    constructor(element) { 
        this.element = element // elemento própriamente dito (analogia a carga do vagão do trem)
        this.next = undefined // ponteiro referênciando próximo node (analogia a ligação metálica para próximo vagão)
    }
}

class LinkedList { // Criando a linked list
    constructor() {
        this.head = null // referenciando o primeiro item da linked list (Head) 
        this.count = 0 // referenciando propriedade para auxiliar no tamanho da lista
    }

    push(element) { // método para adicionar um node no final da lista
        const node = new Node(element); // instanciando meu node passando como parâmetro o elemento que quero adicionar
        if (this.head == null) { // situação em que minha lista está vazia
            this.head = node // meu node previamente instanciado e passado elemento de parâmetro, será meu primeiro node adicionado na lista e se tornará o head da lista.
        } else { // situação ao contrária, aonde minha lista já tem node inseridos nela.
            let current = this.head // instancio meu primeiro node (head) a um para encontrar os demais nodes.
            while(current.next != null){ // iterando toda minha lista até achar o ponteiro vazio
                current = current.next; 
            }
            current.next = node // atribuo o ultimo node vazio para meu node que quero adicionar
        }
        this.count++ // incremento o auxiliador do tamanho de lista
    }

    removeAt(index){ // método para remover um nó em determinado índice
        if(index < 0 || index > this.count){ // validação para o índice ser um valor válido
            return undefined // caso não seja, retorna undefined
        }

        let current = this.head // declarando o nó head (nó atual) para variavel current

        if (index === 0){ // removendo o índice 0
            this.head = current.next // removendo meu índice 0, onde a head vira this.head.next
        } else { // caso o índice a ser removido não seja 0
            let previous; // declarando previous
            for(let i = 0; i <index ; i++) { // iteração for para percorrer a lista até o index para remoção
                previous = current // reatribui a variavel previous para o nó anterior ao index
                current = current.next // atribui a variavel current para current.next (nó após o index)
            }
            previous.next = current.next // quando é chegado ao index escolhido, a variavel previous seria o nó anterior logo o previous.next será o valor a ser removido e o current.next que aponta ao index +1, assim removendo o indice
        }
        this.count--; // atualizando tamanho da lista
        return current.element // retorno de elemento removido
    }

    getElementAt(index){ // método para retornar o nó no índice escolhido, pois o laço de repetição para encontrar um índice é comumente usado em linked list
        if(index >= 0 && index <= this.count){ // validação se o índice existe 
            let current = this.head // atribuindo o nó atual para variável current
            for (let i = 1; i <= index ;i++) { // loop para iterar a linked list
                current = current.next // avançando para o próximo nó a cada iteração
            }
            return current //momento em que i chegou ao index e retornou o nó indexado
        } 
        return undefined // caso índice não exista, retorna undefined
    }
    
    insert(element,index) { //método para inserir um element em determinado índice
        if(index >= 0 && index <= this.count){ // validação do valor do index
            const node = new Node(element)
            if (index === 0) { // caso indice seja 0, o elemento node vira o head e o head vira node.next
                const current = this.head
                node.next = current
                this.head = node
            } else { // caso não, definimos o antecessor do index que queremos e fazemos a lógica para mudar de posição
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count ++ // incrementador
            return true
        }
        return false  // caso index seja valor invalido      
    }

    size() { // método para ver tamanho da linked list
        return this.count
    }

    isEmpty() { // método para retornar se a linked list está vazia
        return this.size() === 0
    }

    getHead() { // método para retornar a cabeça da linked list
        return this.head
    }

    toString() { // método to string
        if(this.head === null) {
            return "";
        } 
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1 ; i < this.size(); i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

const ll = new LinkedList()
ll.push("olá")
ll.push("tudo bem?")
ll.removeAt(1)
console.log(ll.toString())