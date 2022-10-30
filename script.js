// let receitas = []; // pegar essas receitas que já foram salvas na internet e trazer pra cá 

let dataAtual = new Date()
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

const usuarios = [];

let novoUsuario;

//pega o nome do usuario e envia para o servidor
function cadastrarUsuario(){

    let perguntaNome = prompt("Escolha um nome de usuário")
    let nomeDeUsuario = {name: perguntaNome}

    novoUsuario = perguntaNome
  
    const usuario = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nomeDeUsuario)
    usuario.then(cadastrado)
    usuario.catch(naoCadastrado)
}

//retorna o erro e pede outro nome
function naoCadastrado(erro) {

    if ( erro.response.status === 400){
        console.log("funcionando")
        cadastrarUsuario()
    } 
    if (erro.response.status === 200){
        return
    }
    else {
        console.log('deu errado')
    }
 }

 //insere html com a notificação de entrada do usuario
 function cadastrado(){
    console.log('tudo certo')
    // const usuarioEntrou = document.querySelector('.espaco-chat')
    // usuarioEntrou.innerHTML = `<li class="notificacao status">
    // <span class="cinza">(${hora}:${minuto}:${segundo})</span> <span class="negrito"> ${novoUsuario}</span> entra na sala... 
    // </li>`
 }

 cadastrarUsuario()

 //mantem o status do usuario atualizado
 function online(){
    let nomeDeUsuario = {name: novoUsuario}
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", nomeDeUsuario)
}

setInterval(online, 5000);

//buscar mensagens no servidor
function buscarMensagem(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promessa.then(chegou)
    promessa.catch(nChegou)
}

buscarMensagem();

let mensagens = [];

function chegou(resposta) {
    renderizarMensagens(resposta)
} 

function renderizarMensagens(notific){
    const tudo = notific.data

    for(let i=0; tudo.length > i; i++){
        mensagens.push(tudo[i])
    }

    adicionarNaTela()
}

function adicionarNaTela(){
    const msg = document.querySelector('.espaco-chat');

    for(let i=0; mensagens.length>i; i++){
        msg.innerHTML += `
        <li class="${mensagens[i].type} notificacao">
            <span class="cinza"> (${mensagens[i].time}) </span> <span class="negrito">${mensagens[i].from}</span> para <span class="negrito">${mensagens[i].to}</span> : ${mensagens[i].text}
        </li>
    `
    }
}

setInterval(buscarMensagem, 3000);

function nChegou(resposta){
    console.log(resposta)
}
