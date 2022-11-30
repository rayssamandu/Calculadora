verificarVelocidade(87)

function verificarVelocidade(velocidade) {
    if (velocidade > 0 && velocidade <= 70){
        console.log("Ok");
    }
    else {
        const pontos = Math.floor(((velocidade - 70) / 5));
        if (pontos >= 12)
            console.log("Carteira Suspensa");
        else
            console.log(pontos, "Pontos")
    }

}

