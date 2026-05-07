// add um ouvinte de evento para quando o usuário selecionar um estado no dropdown 'estados'
document.getElementById('estados').addEventListener('change', function() {
    // obtém o value do estado selecionado
    const estado = this.value;
    const campoMunicipios = document.getElementById('municipios');

    // desativa o campo de municípios temporariamente enquanto carrega os dados
    campoMunicipios.disabled = true;

    // se o usuário selecionar a opcao vazia ("Selecione um estado"), limpa o campo de municípios
    // e não faz nenhuma alteracao
    if (estado === "") {
        campoMunicipios.innerHTML = '<option value="">Selecione um estado primeiro</option>';
        return;
    }
    // constroi a URL da API do IBGE para buscar os municípios do estado selecionado
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;

    fetch(url)
        .then(resposta => resposta.json())  // converteu a resposta para JSON
        .then(cidades => { 
            // limpa o campo de municípios e adiciona uma opção padrão
            campoMunicipios.innerHTML = '<option value="">Selecione um município</option>';

            cidades.forEach(cidade => {
                const novaOpcao = document.createElement('option');
                novaOpcao.value = cidade.nome;  // define o valor da opção como o nome da cidade
                novaOpcao.textContent = cidade.nome;  // define o texto exibido como o nome da cidade
                campoMunicipios.appendChild(novaOpcao);
            });

            //reabilita o campo de municípios
            campoMunicipios.disabled = false;
        })
        .catch(erro => {  // trata erros q pode ter
            console.error(erro);  //exibe o erro no console
        });
});
