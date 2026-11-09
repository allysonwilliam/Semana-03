function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let corSemaforo = "Amarelo";
switch (corSemaforo) {
    case "Vermelho":
        console.log("Pare");
        break;
    case "Amarelo":
        console.log("Atenção");
        break;
    case "Verde":
        console.log("Siga");
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(`${j} é par`);
    } else {
        console.log(`${j} é ímpar`);
    }
    j++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}
