// let x = 5;
// let anna = (num) => console.log(num * 5);

// var num = 'senai';

// testes com os exemplos da w3 schools

// let result = "Not Active.";
// let isActive = false;
// console.log(result, isActive)

// if (isActive = true) {
//     let result = "Active!";
// }
// console.log(result, isActive) 

let isActive = false
console.log(isActive ? "Está Ativado" : "Está Desativado")


try{

    // console.log(anna(5))
    // x = y + 1;

    // new Array(-2)

    // num = num.toUpperCase();
    // console.log(num)

}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Stack:</strong> <span>${erro.stack} </span>
    `;

    document.body.innerHTML = text
};

const carregarComponente = async(caminho, container) =>{
    try{

        const resposta = await fetch(caminho);

        if(!resposta.ok){
            throw new Error('Error ao carregar componente')
        }

        const html = await resposta.text();

        container.innerHTML = html;

    }catch(erro){
        console.error(erro)

    };                                        
};