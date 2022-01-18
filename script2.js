/* Arquivo de scripts para o challenge do One #challengeonelogicabr*/

// Este bloco cria o evento para ouvir o bot�o de Criptografar!, faz as verifica��es necess�rias
// e codifica a frase!
var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function() {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto = document.querySelector('#msg')
    var frasecriptografar = formcodificar.inputtexto.value;
    frasecriptografar = normalizar(frasecriptografar);
    var frasecodificada = codificar(frasecriptografar);
    caixatexto.value = frasecodificada;
});

// Este bloco cria o evento para ouvir o bot�o de Descriptografar!, faz as verifica��es necess�rias
// e descodifica a frase!
var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function() {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto2 = document.querySelector('#inputtexto')
    var frasedescriptografar = formcodificar.inputtexto.value;
    var frasedescodificada = descodificar(frasedescriptografar);
    console.log(frasedescodificada);
    console.log(caixatexto2);
    caixatexto2.value = frasedescodificada;
});

//Este bot�o copia o conte�do da caixa do texto criptografado para a �rea de transfer�ncia (CTRL + C)
var botaoCopiar = document.querySelector('#btn-copy');
botaoCopiar.addEventListener("click", function(){
    event.preventDefault();
    var textArea = document.querySelector('#msg');
    textArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a �rea de transfer�ncia!')
});

//Esta fun��o codifica a frase
function codificar(frase) {
    frasecod = frase.replace(/i/gi,"imes").replace(/e/gi,"enter").replace(/a/gi, "ai").replace(/o/gi,"ober").replace(/u/gi,"ufat").toLowerCase();
    return frasecod;
}

//Esta fun��o descodifica a frase
function descodificar(frase){
    frasedecod = frase.replace(/ai/gi, "a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u").toLowerCase();
    return frasedecod;
}

//Esta fun��o normaliza (remove os acentos) da frase e devolve a frase limpa para ser cod/descodificada
function normalizar(frase){
    fraselimpa = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return fraselimpa;
}

//Mantive os coment�rios abaixos da tarefa para confer�ncias futuras.

/* Regras Codificador: 
"e" � convertido para "enter" 
"i" � convertido para "imes"
"a" � convertido para "ai"
"o" � convertido para "ober"
"u" � convertido para "ufat"
Apenas letras min�sculas
N�o permite acentua��o   
*/

/* Regras Decodificador: 
"enter" � convertido para "e" 
"imes" � convertido para "i"
"ai" � convertido para "a"
"ober" � convertido para "o"
"ufat" � convertido para "u"
Apenas letras min�sculas
N�o permite acentua��o     
*/