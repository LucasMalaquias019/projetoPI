class Cliente {
  constructor() {
      this.clientes = localStorage.getItem('tbClientes') === null
      ? []
      : JSON.parse(localStorage.getItem('tbClientes'))
  }

  salva(cliente){

    if(document.getElementById('codigo').getAttribute('disabled') ==='disabled'){
        this.apaga(cliente.codigo)
    }
      this.clientes.push(cliente) 
      localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
      alert('Cliente salvo com sucesso!')
  }

  apaga(codigo){
      let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
      this.clientes.splice(index, 1) 
      localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
      cliente.atualiza()
  }

  edita(cliente){
    document.getElementById('codigo').setAttribute('disabled', 'disabled')
    document.getElementById('codigo').value = cliente.codigo
    document.getElementById('nome').value = cliente.nome
    document.getElementById('rg').value = cliente.precocusto
    document.getElementById('endereco').value = cliente.lucro
    document.getElementById('bairro').value = cliente.bairro
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('cep').value = cliente.cep
    document.getElementById('uf').value = cliente.uf
    document.getElementById('telefone').value = cliente.telefone
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cpf').value = cliente.cpf
    document.getElementById('nomefantasia').value = cliente.nomefantasia
    document.getElementById('contato').value = cliente.contato
    document.getElementById('email').value = cliente.email
    document.getElementById('nascimento').value = cliente.nascimento
 
  }


  lista(){
      const listagem = this.clientes.map((cliente) => (
          `<tr>
          <td>${cliente.codigo}</td>
          <td>${cliente.nome}</td>
          <td>${cliente.rg}</td>
          <td>${cliente.endereco}</td>
          <td>${cliente.bairro}</td>
          <td>${cliente.cidade}</td>
          <td>${cliente.cep}</td>
          <td>${cliente.uf}</td>
          <td>${cliente.telefone}</td>
          <td>${cliente.celular}</td>
          <td>${cliente.cpf}</td>
          <td>${cliente.nomefantasia}</td>
          <td>${cliente.contato}</td>
          <td>${cliente.email}</td>
          <td>${cliente.nascimento}</td>
          <td>${cliente.observacoes}</td>
          <td>
              <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
              🗑️Apagar</button>
              <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
              ✏️Editar</button>
          </td>
          </tr>
          `
      ))
      return (`<table border='1' class='paleBlueRows'>
      <caption>Relação dos Clientes</caption>
      <thead>
          <th>Código</th>  
          <th>NOME</th> 
           <th>RG</th>
          <th>ENDERECO</th> 
          <th>BAIRRO</th>  
          <th>CIDADE</th>
          <th>CEP</th>
          <th>UF</th>
          <th>TELEFONE</th>
          <th>CELULAR</th>
          <th>CPF/CNPJ</th>
          <th>NOME FANTASIA</th>
          <th>CONTATO</th>
          <th>E-MAIL PESSOAL</th>
          <th>DAT. NASC</th>
          <th>Observações</th>
          <th>Opções</th>
      </thead>
      <tbody>${listagem}</tbody>      
      </table>
      `)
  }

  atualiza(){
      document.getElementById('listagem').innerHTML = cliente.lista()
  }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar

document.getElementById('salvar').onclick = function ()  {
  const registro = {
      codigo: document.getElementById('codigo').value,
      nome: document.getElementById('nome').value,
      rg: document.getElementById('rg').value,
      endereco: document.getElementById('endereco').value,
      bairro: document.getElementById('bairro').value,
      cidade: document.getElementById('cidade').value,
      cep: document.getElementById('cep').value,
      uf: document.getElementById('uf').value,
      telefone: document.getElementById('telefone').value,
      celular: document.getElementById('celular').value,
      cpf: document.getElementById('cpf').value,
      nomefantasia: document.getElementById('nomefantasia').value,
      contato: document.getElementById('contato').value,
      email: document.getElementById('email').value,
      observacoes: document.getElementById('observacoes').value
  } 
  cliente.salva(registro)
}

window.onload = function(){
  cliente.atualiza()
}
