// Dicionário(Map), é uma estrutura de dados que armazena chave e valor, similar a um objeto, porém podemos usar qualquer tipo de dados em chave, mantem a inserção dos pares e temos métodos adicionais. É comumente utilizado um Map quando temos aplicações robustas. 

// Já é nativo do JS, não é preciso criar classe

let mapLivros = new Map() // instanciando map a uma variável

mapLivros.set("a bela e a fera", 1) // método feito para adicionar um item ao map
mapLivros.set("chapeuzinho vermelho", 2) 
console.log(mapLivros.get("chapeuzinho vermelho")) // método para retornar o value de uma chave
console.log(mapLivros.has("a bela e a fera")) // método para retornar em boolean se existe essa chave
mapLivros.delete("a bela e a fera") // método para remover item (chave-valor) do objeto
mapLivros.set("a bela e a fera", 1) 
mapLivros.clear() // método para apagar todos os itens do Map
console.log(mapLivros.size) // propriedade para retornar quantos itens tem no Map
mapLivros.set("chapeuzinho vermelho", 2) 
mapLivros.set("a bela e a fera", 1) 
console.log(mapLivros)