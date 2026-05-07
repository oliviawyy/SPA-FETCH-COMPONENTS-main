
const botaothen = document.querySelector('.buttton__buscar--then');
const botaoawait = document.querySelector('.button__buscar--await');

/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01001000/json/';

const consulta = fetch(url);

consulta
.then((response) => {

    if(!response.ok){
        throw new Error('Erro na Requisição.')
    }
    return response.json()
})
.then((dados) => {

    if(dados.erro){
        throw new Error('CEP inválido ou não encontrado.')
    }
    console.log(dados)
})
.catch((erro) => {
    console.warn(erro.message)
});


/* Criar uma requisição HTTP com fecth e async/await */

async function buscarCep(){
    let resposta = await consulta;
    console.log(resposta)
    let dataObj = await resposta.json();
    console.log(dataObj);
};



botaothen.addEventListener('click', () => {
    buscarCep();
});



// const inputCep = document.querySelector('.input__cep');
// const botoes = document.querySelectorAll('button'); 

// const btnThen = botoes[0];
// const btnAsync = botoes[1];
// const url = 'https://viacep.com.br/ws/01001000/json/';
// const consulta = fetch(url);

// consulta.then(resposta => {

//     if (!resposta.ok) {
//         throw new Error('Erro na Requisição');
//     }
    
//     return resposta.json() 
// })

// .then(dados => {
//     if (dados.erro) {
//         throw new Error('CEP não encontrado ou inválido');
//     }
//     console.log(dados)

// })

// .catch((erro) => { 
//     console.warn(erro.message)
// });

