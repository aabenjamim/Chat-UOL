// let receitas = []; // pegar essas receitas que já foram salvas na internet e trazer pra cá 

let usuarios = [];
let mensagens = [];

let novoUsuario;

function cadastrarUsuario(){

    let perguntaNome = prompt("Escolha um nome de usuário")
    let nomeDeUsuario = {name: perguntaNome}

    novoUsuario = perguntaNome

    console.log('executando')
    
    const usuario = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nomeDeUsuario)
    usuario.then(cadastrado)
    usuario.catch(naoCadastrado)
}

function naoCadastrado(erro) {

    console.log(erro.response.status);

    if ( erro.response.status === 400){
        console.log("funcionando")
        cadastrarUsuario()
    } 
    if (erro.response.status === 200){
        return
    }
    else {
        alert('deu errado')
    }
 }

 function cadastrado(){

    const usuarioEntrou = document.querySelector('.espaco-chat')
    usuarioEntrou.innerHTML = `<li class="notificacao entrada"> <span class="negrito">${novoUsuario}</span> entra na sala... </li>`
 }

 cadastrarUsuario()



// function pegarReceitas() {
//     // 1 - tenho que ter uma ferramenta que faz isso tudo funcionar -> axios

//     // 2 - enviar a cartinha pedindo para pegar as receitas salvas
    
//     const promessa = axios.get('https://instructor-api.sistemas.driven.com.br/projects/tastecamp/receitas');
//     // console.log('Enviou o pedido');
//     // 3 - receber a resposta do servidor
//     promessa.then(respostaChegou); // agendando para a função respostaChegou ser esecuta quando a resposta do servidor chegar 
    
//     //setTimeout(respostaChegou, 5000);
// }

// pegarReceitas()


// function respostaChegou(resposta) {
//     // console.log("RESPOSTA CHEGOU");
//     // console.log(resposta);
//     console.log(resposta);

//     receitas = resposta.data;

//     // 4 - renderizar as receitas vindas do servidor
//     rederizarReceitas();
// }


// function adicinarReceita() {
//     // pegar o info digitada nos inputs
//     const nomeReceita = document.querySelector('.nome-receita').value;
//     const ingredientesReceita = document.querySelector('.ingredientes-receita').value;
//     const preparoReceitas = document.querySelector('.modo-preparo-receita').value;

//     // criar um objeto com essas informações
//     const novaReceita = {
//         titulo: nomeReceita,
//         ingredientes: ingredientesReceita,
//         preparo: preparoReceitas
//     };
//     console.log(novaReceita);

//     // adicionar a nova receita (objeto) no array
//     // receitas.push(novaReceita);
//     const promise = axios.post("https://instructor-api.sistemas.driven.com.br/projects/tastecamp/receitas", novaReceita);
//     promise.then(deuCerto)      // agenda uma função para quando a requisição dá certo
//     promise.catch(deuErrado)    // agenda uma função para quando a requisição dá errado

//     // renderizar as receitas na tela
//     rederizarReceitas();
// }

// function deuCerto(resposta) {
//     console.log(resposta.status)
//     alert("Sua receita foi adicionada!")
//     pegarReceitas()
// }

// function deuErrado(erro) {
//     console.log(erro);
    
//     if ( erro.response.status === 422){
//         alert(erro.response.data.detalhes[0]+', '+erro.response.data.detalhes[1]);
//     }else if ( erro.response.status === 404) {
//         alert("O recurso não foi encontrada no servidor");
//     }else{
//         alert("ocorreu um erro!");
//     }
// }

// function rederizarReceitas() {

//     const listaReceitas = document.querySelector('.receitas');

//     listaReceitas.innerHTML = '';

//     for (let i = 0; i < receitas.length; i++) {

//         let receita = receitas[i];

//         listaReceitas.innerHTML += `
//             <li>
//                 <ion-icon name="fast-food-outline"></ion-icon>
//                 ${receita.titulo}
//             </li>
//         `;
//     }

// }
// rederizarReceitas();



