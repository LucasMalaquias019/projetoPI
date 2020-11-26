class Produto {
    constructor(){
        this.produtos = localStorage.getItem('tbProdutos') === null
        ?[]
        : JSON.parse(localStorage.getItem('tbProdutos'))
    }

    salva(produto){

        if(document.getElementById('codigo').getAttribute('disabled') ==='disabled'){
            this.apaga(produto.codigo)
        }
        this.produtos.push(produto)
        localStorage.setItem('tbProdutos',JSON.stringify(this.produtos))
        alert('Produto salvo com Sucesso!')
    }

    apaga(codigo){
        let index = this.produtos.findIndex(produto => produto.codigo == codigo)
        this.produtos.splice(index, 1)
        
        localStorage.setItem('tbProdutos',JSON.stringify(this.produtos))
        produto.atualiza()
     }
    
     edita(produto){
       document.getElementById('codigo').setAttribute('disabled', 'disabled')
       document.getElementById('codigo').value = produto.codigo
       document.getElementById('nome').value = produto.nome
       document.getElementById('precocusto').value = produto.precocusto
       document.getElementById('lucro').value = produto.lucro
       document.getElementById('precovenda').value = produto.precovenda
       document.getElementById('icms').value = produto.icms
       document.getElementById('nfe').value = produto.nfe
       document.getElementById('unidade').value = produto.unidade
       document.getElementById('marca').value = produto.marca
       document.getElementById('categoria').value = produto.categoria
       document.getElementById('origem').value = produto.origem
       document.getElementById('codigobarrasmanu').value = produto.codigobarrasmanu
    
     }

    lista(){
        const listagem = this.produtos.map((produto) =>(
            `<tr>
            <td>${produto.codigo}</td>
            <td>${produto.nome}</td>
            <td>${produto.precocusto}</td>
            <td>${produto.lucro}</td>
            <td>${produto.precovenda}</td>
            <td>${produto.icms}</td>
            <td>${produto.nfe}</td>
            <td>${produto.unidade}</td>
            <td>${produto.marca}</td>
            <td>${produto.categoria}</td>
            <td>${produto.origem}</td>
            <td>${produto.codigobarrasmanu}</td>
            <td>
            <button class='apagar' id='apagar' title='Apagar' onClick = 'produto.apaga(${produto.codigo})'>
        🗑️ Apagar </button>
        <button class='editar' id='editar' title='Editar' onClick = 'produto.edita(${JSON.stringify(produto)})'> 
        ✏️ Editar</button>
        </td>
            </td>
            </tr>`

        ))

        return(` <table border='1' class='paleBlueRows'>
        <caption>Relacão dos Produtos</caption>
        <thead>
             <th>CODIGO</th> <th>NOME</th> <th>PRECO CUSTO</th> <th>LUCRO</th>
             <th>PRECO VENDA</th><th>ICMS %</th> <th>NF-E</th> <th>UNIDADE</th> <th>MARCA</th>
             <th>CATEG</th> <th>ORIGEM</th> <th>COD. BARRAS</th> <th>OPCOES</th>
        </thead>
        <tbody>${listagem}</tbody>
    </table>
        
        `)
    }

    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()
    }
}

const produto = new Produto()

document.getElementById('salvar').onclick = function (){
    const registro = {
        codigo: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        precocusto: document.getElementById('precocusto').value,
        lucro: document.getElementById('lucro').value,
        precovenda: document.getElementById('precovenda').value,
        icms: document.getElementById('icms').value,
        nfe: document.getElementById('nfe').value,
        unidade: document.getElementById('unidade').value,
        marca: document.getElementById('marca').value,
        categoria: document.getElementById('categoria').value,
        origem: document.getElementById('origem').value,
        codigobarrasmanu: document.getElementById('codigobarrasmanu').value
    }
    produto.salva(registro)
} 
window.onload = function(){
    produto.atualiza()
}

document.getElementById('lucro').onchange = function() {
    let precocusto = document.getElementById('precocusto').value
    let lucro = document.getElementById('lucro').value
    let precovenda = parseFloat(precocusto) + parseFloat(lucro*precocusto)/100
    document.getElementById('precovenda').value = precovenda.toFixed(2)
}