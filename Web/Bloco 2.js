console.log(ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log(erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

function dobroDeclarada(n) {
    return n * 2;
}

const dobroExpressao = function(n) {
    return n * 2;
};

const dobroArrow = n => n * 2;

console.log(dobroDeclarada(5));
console.log(dobroExpressao(5));
console.log(dobroArrow(5));

function dobroPadrao(n = 1) {
    return n * 2;
}

console.log(dobroPadrao());
console.log(dobroPadrao(7));
