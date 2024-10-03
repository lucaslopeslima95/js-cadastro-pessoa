class Pessoa {  

    nome  = '';
    idade  = '';
    profissao = '';
    email = '';

    exibirInformacoes() {
      return 'Nome:'+this.nome+
      'Idade:'+this.idade+'Profissão:'+this.profissao;
    }
}
  
  

function cadastrar(){

    let nome         = document.getElementById('nome').value;
    let idade        = document.getElementById('idade').value;
    let email        = document.getElementById('email').value;
    let profissao    = document.getElementById('profissao').value;

    const pessoa     = new Pessoa();
    pessoa.nome      = nome;
    pessoa.idade     = idade;
    pessoa.email     = email;
    pessoa.profissao = profissao;

    document.getElementById('nome').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('email').value = "";
    document.getElementById('profissao').value = "";

    localStorage.setItem((localStorage.length+1),JSON.stringify(pessoa));

    window.location.href = 'lista.html';
;}