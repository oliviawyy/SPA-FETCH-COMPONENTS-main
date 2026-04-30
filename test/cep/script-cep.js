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

