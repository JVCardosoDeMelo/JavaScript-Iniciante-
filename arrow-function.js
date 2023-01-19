function apresentar (nome) {
    return `oi  , me chamo ${nome}`
}

const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1 ,num2 ) => num1 + num2;

const somanumerospequenos = (num1 ,num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros positivos menores que 10 "
    } else {
        return num1 + num2;
    }
}
console.log(somanumerospequenos(4,5))