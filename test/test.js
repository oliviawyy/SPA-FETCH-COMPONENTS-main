// let isActive = false
// console.log(isActive ? "Está Ativado" : "Está Desativado")


try {

    let idade = -5;

    if (idade < 0) {
        throw gerarErro(1001, 'VALIDAÇÃO', 'idade inválida');
    }

} catch (erro) {
    let text = `
        <strong>Mensagem: </strong> ${erro.message} <br/>
        <strong>Código:</strong> ${erro.codigo} <br/>
        <strong>Tipo:</strong> ${erro.tipo} <br/>
    `;

    document.body.innerHTML = text;
    console.log(erro);

};

// function gerarErro (codigo, tipo, mensagem) {
//     let erro = new Error(mensagem);
//     erro.codigo = codigo;
//     erro.tipo = tipo;
//     return erro;
// };

// try {
//     let saldo = 100;

//     if (saldo < 200) {
//         throw gerarErro(60, 'FINANCEIRO', 'Saldo insuficiente');
//     }
// } catch (erro) {
//     console.log(erro, erro.codigo, erro.tipo);
// };


// const containerComponents = document.querySelector('.components__test')

// const carregarComponente = async (componente, container) => {
//     try {
//         // await para esperar a resposta do fetch, e depois converte a resposta para texto que é o html do componente
//         const resposta = await fetch(`./${componente}.html`);

//         if (!resposta.ok) {
//             throw new Error(`Erro ao carregar componente: ${componente}`);
//         }

//         // pega o html do componente 
//         const html = await resposta.text();
//         // e insere no container
//         container.innerHTML = html;
//     }
//     catch (error) {
//         console.warn(error);
//     }
// }

// const url = 'c-test.html'
// const containerTest = document.querySelector('#app');
// carregarComponente(url, containerTest);


/* Testando a função: carregarComponente
01 - Criar o componente que será injetado FEITO
02 - Criar o elemento que irá receber o componente (test.html) FEITO
03 - Capturar o elemento que irá receber o componente( no test.html) FEITO
04 - Utilizar a função para carregar o componente FEITO */

// const containerComponents = document.querySelector('.components__test')
// carregarComponente('c-test', containerComponents)


//  criar uma requisicao HTTP com fetch e .then
const url = 'https://viacep.com.br/ws/01001000/json/';
const consulta = fetch(url);

consulta.then(resposta => {

    if (!resposta.ok) {
        throw new Error('Erro na Requisição');
    }
    
    return resposta.json() 
})

.then(dados => {
    if (dados.erro) {
        throw new Error('CEP não encontrado ou inválido');
    }
    console.log(dados)

})

.catch((erro) => { 
    console.warn(erro.message)
});



// console.log(consulta) // Promise { <pending> }
// fetch().then().then().catch()