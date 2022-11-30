let endereco = {
    rua: 'Conselheiro Jose Braz do Rego',
    cidade: 'João Pessoa',
    cep: 58046740

};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);