// Trees (Árvores) são estruturas de dados não necessariamente sequenciais, com modelo de estrutura hierárquica composto por nós, onde cada nó tem filhos (ou um filho).     Ex: Uma árvore genealógica.

// Toda árvore é constituida por: Nós (Node) que tem um comportamento de pai e filho, onde todo node tem um pai (exceto o node raiz(root)) e podem ter ou não nodes filhos.
// Os nodes podem ser classificados como: Node Interno (Nó com 1 ou 2 filhos), Nó externo ou Folha (Node sem filhos) e Node Root (Primeiro node da sua árvore, raíz).
// Uma subárvore é composta por um node pai e seus descendentes

// Tipos mais usuais de árvores: Binary tree (Árvores binárias) e Binary Search Tree (Árvore binária de busca).

// Árvore Binária: Árvore onde não tem uma organização da ordem dos seus nodes, onde pode resultar a um processamento menos eficiente.
// BST: Árvore onde existe uma organização de seus nodes, onde os valores menores ficam a esquerda, e os maiores a direita a partir de um node pai.
// Ambas as árvores podem ter no máximo 2 filhos para cada node.

// Criando classe Node e classe BST

class Node { // criando classe Node
	constructor(key) {
		this.key = key; // key é o valor do Node
		this.right = null; // referenciando caminho da esquerda
		this.left = null; // referenciando caminho da direita
	}
}

class BinarySearchTree { // criando classe BST
	constructor() {
		this.root = null; // declarando node root (node raíz, pai de todos)
	}

	insert(key) { // método usado para adicionar nodes na árvore
		if (this.root === null) { // verificação se o node root da árvore é vazio
			this.root = new Node(key); // caso true, o node com valor key é declarado como node root
		} else {
			this._insertNode(this.root, key); // caso false, é chamado método auxiliar para inserir novo node, a partir dos princípios de uma BST.
		}
	}

	_insertNode(node, key) { // método auxiliar para inserir novo node, seguindo princípios da BST
		if (key < node.key) { // verificação se o novo node(key) a ser inserido, é menor que o node pai. Caso seja, seguimos pra esquerda.
			if (node.left === null) { // verificação se o node filho da esquerda (seguindo ordem da BST) está vazio.
				node.left = new Node(key); // como ele é menor e o node filho da esquerda está vazio, ele é inserido na esquerda. Criando assim um caso de base.
			} else { // caso ele não seja vazio, precisamos verificar a subarvore dele até achar um local para ser inserido, para isso usamos uma chamada recursiva.
				this._insertNode(node.left, key); // chamada recursiva, que repete ela mesma até achar o caso de base, que nesse caso seria onde um node pai tem seu node left vazio, quando for true a chamada recursiva o node left seria atribuido com o valor de key
			}
		} else { // caso o node(key) a ser inserido seja maior que o node a ser comparado. (node pai). Como não é, seguimos pra direita.
			if (node.right === null) { // verificação se a direita do node pai está vazia
				node.right = new Node(key); // caso seja true, declara o filho a direita do pai como key, criada caso de base.
			} else { // caso o filho da direita já tenha um node, precisamos verificar a subárvore dele até achar um local para ser inserido, é usado a chamada recursiva;
				this._insertNode(node.right, key); // chamada recursiva, chamando ela mesma até o caso de base se tornar true.
			}
		}
	}

	search(key) { // método para procurar uma node(key)
		return this._searchNode(this.root, key); // chama o método auxiliar, onde compara o node que estou procurando e o key que quero achar
	}

	_searchNode(node, key) { // método auxiliar para fazer toda busca, onde "node" é o node atual que estamos e "key" o elemento a ser procurado.
		if (node === null) { // validação se o root dessa bst existe, caso contrário retorna null
			return null;
		}

		if (key < node.key) { // verificação para qual caminho seguir, caso seja true devemos seguir pra esquerda (seguindo o princípio de ordenação da BST)
			return this._searchNode(node.left, key); // vai me retornar recursivamente o node pra esquerda que estamos e o key que estamos procurando, até satisfazer o meu caso de base
		} else if (key > node.key) { // caso seja false, o caminho será para direita (seguindo princípio de ordenação da BST)
			return this._searchNode(node.right, key); // recursão para retornar o caminho da direita, até satisfazer o meu caso de base
		} else { // momento em que o node atual e o key são iguais, e é criado o caso de base da minha recursão
			return node; // retorna o node buscado
		}
	}

    remove(key) { // método para remover o node(key) passado como parâmetro.
        return this._removeNode(this.root,key) // recursão para retorno de node com key
    }

    _removeNode(node,key) { // método auxiliar para encontrar o node a ser removido, onde "node" é o node atual que estamos e "key" o elemento a ser removido.
        if (node === null) { // verificação se o root está vazio
            return null // retorna null
        }

        if (key < node.key) { // verificação para qual caminho levar; caminho para esquerda
            node.left = this._removeNode(node.left,key); // chamada de recursão para todos os elementos left.
            return node; // retornando o node que estamos atualizado
        } else if(key > node.key) { // caminho para direita
            node.right = this._removeNode(node.right,key); // chamada de recursão para todos os elementos right
            return node; // retornando o node que estamos atualizado
        } else { // caso tenha sido encontrado, criação do caso de base.
            // caso 1: nó sem filhos (folha)
            if (node.left === null && node.right === null) { // verificando se o node é uma folha 
                node = null; // caso true, reatribui o node atual para null
                return node // retorna o node
            }
            // caso 2: nó com um filho
            if (node.left === null) { // caso o node left seja null (não exista filho da esquerda)
                node = node.right // node right é removido sobreescrevendo o right para o node excluído.
                return node; // retorna o valor reatribuido de node, que seria o filho right
            
            } else if (node.right === null) { // caso o node right seja null (não exista filho da direita)
                node = node.left; // node left é removido sobreescrevendo o right para o node excluido.
                return node; // retorna o valor reatribuido de note, que seria o filho left
            }

            //caso 3: nó com dois filhos
            const aux = this._findMinNode(node.right); // Método para encontrato no sucessor in order, que é encontrado na direita o menor valor da subárvore
            node.key = aux.key // declarado esse valor encontrado no node.key
            node.right = this._removeNode(node.right,aux.key); // removendo o node right que seria o sucessor in order atualizado.
            return node;      
        }
    }

    _findMinNode (node) { //método para encontrar o menor node(key) dentro de uma subárvore
        while(node.left !== null) { // iteração que continua em quanto o node tem um filho a esquerda
            node = node.left; // movimento a esquerda a cada iteração
        }
        return node; // retorna o valor do menor node de uma subárvore
    }

    // métodos percussores de uma bst 

    preOrderTraversal() { // método pré order, onde o percorre o node, depois seus filhos a esquerda a direita e volta
        this._preOrderTraversal(this.root); // método auxiliar
    }
    
    _preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.key); // Processa o nó
            this._preOrderTraversal(node.left); // Percorre a subárvore esquerda
            this._preOrderTraversal(node.right); // Percorre a subárvore direita
        }
    }

    inOrderTraversal() { // método in order, onde percorre em ordem, subárvore esquerda -> nó -> direita.
        this._inOrderTraversal(this.root); // método auxiliar
    }
    
    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left); // Percorre a subárvore esquerda
            console.log(node.key); // Processa o nó
            this._inOrderTraversal(node.right); // Percorre a subárvore direita
        }
    }

    postOrderTraversal() { // método post order, o nó atual é processado após seus filhos
        this._postOrderTraversal(this.root); // método auxiliar
    }
    
    _postOrderTraversal(node) {
        if (node !== null) {
            this._postOrderTraversal(node.left); // Percorre a subárvore esquerda
            this._postOrderTraversal(node.right); // Percorre a subárvore direita
            console.log(node.key); // Processa o nó
        }
    }

}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(9)
tree.insert(3)
tree.insert(6)
tree.insert(2)
tree.insert(1)

console.log(tree)