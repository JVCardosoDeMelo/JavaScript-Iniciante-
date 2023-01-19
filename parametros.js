function soma(numero1 , numero2 ) {
    return numero1 + numero2;
}

//console.log(soma(2,2))
//console.log(soma(245,20))
//console.log(soma(-500,600))

//ordem dos parametros

function nomeIdade(_nome , _idade ) {
    return ` meu nome é ${_nome} e tenho ${_idade} anos` ;
}

//console.log(nomeIdade(40,"juliana"))

function multiplicar(numero1 , numero2 ) {
    return numero1 * numero2;
}

console.log(multiplicar(soma(4,5), soma(3,3)) )