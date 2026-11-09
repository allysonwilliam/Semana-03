let pontos = 50;
pontos = pontos + 10;
console.log(pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(erro.message);
    console.log("Explicação: Variáveis declaradas com const não permitem reatribuição de valor após a sua inicialização.");
}

let vString = "JavaScript";
let vNumber = 2026;
let vBoolean = true;
let vUndefined;
let vNull = null;

console.log(typeof vString);
console.log(typeof vNumber);
console.log(typeof vBoolean);
console.log(typeof vUndefined);
console.log(typeof vNull);

let usuario = "Ana";
let jogo = "Xadrez";

let fraseTemplate = `A usuária ${usuario} está jogando ${jogo}.`;
let fraseConcatenada = "A usuária " + usuario + " está jogando " + jogo + ".";

console.log(fraseTemplate);
console.log(fraseConcatenada);
