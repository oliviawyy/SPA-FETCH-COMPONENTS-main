try{

    x = y + 1;

}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text
};