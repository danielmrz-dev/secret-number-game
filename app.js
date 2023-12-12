let listaDeNumerosSorteados = [];
let numeroSecreto = gerarAleatorio();
let limite = 100;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${limite}:`);

function gerarAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * 100 + 1);     
    let qtdeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (qtdeDeElementosNaLista == 100) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        gerarAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limite}:`);
    
}

function reiniciarJogo() {
    numeroSecreto = gerarAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

let tentativas = 1
    
function verificarChute() {    

    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemAcertou);
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    } else {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Você errou!');
            let mensagemMenor = `${tentativas} ${palavraTentativa} feitas. Tente um número MENOR!`
            exibirTextoNaTela('p', mensagemMenor);
        } else {
            exibirTextoNaTela('h1', 'Você errou!');
            let mensagemMaior = `${tentativas} ${palavraTentativa} feitas. Tente um número MAIOR!`
            exibirTextoNaTela('p', mensagemMaior);           
        }
    } tentativas++
    limparCampo();
}