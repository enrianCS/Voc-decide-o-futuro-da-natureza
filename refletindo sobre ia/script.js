const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante o caminho para casa, você passa por um rio cheio de lixo, com peixes mortos e água contaminada. Ao perceber aquela situação, qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é muito triste!",
                afirmacao: [
                    "Você ficou triste ao perceber os impactos da poluição na natureza.",
                    "Pensou nos animais que estão sofrendo com a contaminação."
                ]
            },
            {
                texto: "Precisamos fazer alguma coisa!",
                afirmacao: [
                    "Você acredita que as pessoas precisam agir para proteger o meio ambiente.",
                    "Pensou em maneiras de contribuir para diminuir a poluição."
                ]
            }
        ]
    },

    {
        enunciado: "Ao pesquisar sobre o rio, você descobre que grande parte da poluição vem do descarte incorreto de lixo. O que você faria?",
        alternativas: [
            {
                texto: "Conversaria com as pessoas sobre o problema.",
                afirmacao: [
                    "Você acredita que a conscientização pode ajudar a mudar hábitos.",
                    "Pensou que informar outras pessoas é importante para combater a poluição."
                ]
            },
            {
                texto: "Procuraria uma forma de participar de uma ação de limpeza.",
                afirmacao: [
                    "Você prefere agir diretamente para ajudar a resolver o problema.",
                    "Acredita que atitudes coletivas podem trazer mudanças para o meio ambiente."
                ]
            }
        ]
    },

    {
        enunciado: "Na escola, sua turma decide criar um projeto para ajudar o meio ambiente. Qual ideia você escolheria?",
        alternativas: [
            {
                texto: "Criar uma campanha de reciclagem.",
                afirmacao: [
                    "Você acredita que separar e reciclar materiais pode reduzir a quantidade de lixo.",
                    "Pensou em incentivar outras pessoas a adotarem hábitos mais sustentáveis."
                ]
            },
            {
                texto: "Organizar um mutirão para limpar áreas poluídas.",
                afirmacao: [
                    "Você acredita que colocar a mão na massa pode gerar resultados concretos.",
                    "Pensou em unir a comunidade para cuidar dos espaços públicos."
                ]
            }
        ]
    },

    {
        enunciado: "Durante uma conversa, alguém diz que os problemas ambientais não são responsabilidade de uma única pessoa. Como você responde?",
        alternativas: [
            {
                texto: "Todos nós podemos fazer a nossa parte.",
                afirmacao: [
                    "Você entende que pequenas atitudes individuais também são importantes.",
                    "Acredita que cada pessoa pode contribuir para um futuro mais sustentável."
                ]
            },
            {
                texto: "É preciso cobrar atitudes das empresas e do governo.",
                afirmacao: [
                    "Você acredita que grandes mudanças também dependem de decisões coletivas.",
                    "Entende que empresas e governos têm um papel importante na proteção ambiental."
                ]
            }
        ]
    },

    {
        enunciado: "Depois de conhecer melhor os problemas ambientais, você decide pensar no futuro. Qual atitude representa melhor sua visão?",
        alternativas: [
            {
                texto: "Mudar meus hábitos no dia a dia.",
                afirmacao: [
                    "Você percebeu que suas escolhas podem contribuir para a preservação do planeta.",
                    "Decidiu adotar hábitos mais conscientes e sustentáveis."
                ]
            },
            {
                texto: "Incentivar outras pessoas a mudarem também.",
                afirmacao: [
                    "Você acredita que mudanças maiores acontecem quando as pessoas trabalham juntas.",
                    "Quer ajudar a construir uma sociedade mais consciente e preocupada com o meio ambiente."
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let afirmacoes = [];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", () => {
            afirmacoes.push(...alternativa.afirmacao);

            atual++;

            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";

    caixaAlternativas.innerHTML = "";

    textoResultado.textContent = afirmacoes.join(" ");

    caixaResultado.classList.remove("oculto");
}

mostraPergunta();