document.addEventListener("DOMContentLoaded", function () {
    var pergunta = document.getElementById("pergunta");
    var resposta = document.getElementById("resposta");
    var botaoSim = document.getElementById("botaoSim");
    var botaoNao = document.getElementById("botaoNao");

    function exibirResposta(respostaTexto) {
        resposta.textContent = respostaTexto;
    }

    botaoSim.addEventListener("click", function () {
        exibirResposta("Meu pau na sua mão!");
    });

    botaoNao.addEventListener("click", function () {
        exibirResposta("Seu popo no meu pintão!");
    });
});
