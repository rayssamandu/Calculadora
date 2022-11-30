function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosThiago = ['Adeilton', 'Beto', 'Patrícia', 'Matheus', 'Ane Beatriz']
    if (ConvidadosThiago.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Entrada autorizada!'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText ='Entrada não autorizada!'
    }
}