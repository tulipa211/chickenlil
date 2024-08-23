const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPerguntas = document.querySelector('caixa-pergumtas');
const caixaAlternativas = document.querySelector('caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('texto-principal');

const pergumtas = [ 
    {
        enunciado: "no âmbito social, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
    {
        enunciado: "no âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
    {
        enunciado: "no âmbito tecnologico, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmação: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmação: "afirmação",
            },
        ] 
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    perguntaAtual[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener ("click", ()=> respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }

    }
function respostaSelecionada(pergunta){
    const afirmacoes = pergunta.afirmacao;
    historiaFinal+= afirmacoes + "";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo,você ecolheu...";a
    caixaPerguntas.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
    