
/*
    Vamos entender arrow functions como um mecanismo de representar funções 
    anônimas. Vale lembrar também que temos que assciar funções anônimas a 
    uma variável.
*/

const soma = function(v1, v2){
    return v1 + v2;
}

const soma2 = (v1, v2) => {
    return v1 + v2;
}

console.log("Este é o valor da soma 1: ");
console.log(soma(4, 7));

console.log("Este é o valor da soma 2: ");
console.log(soma2(3, 5));


// PECULIARIDADES DA ARROW FUNCTION
const nome = (n) => {
    return(n);
}
console.log("Este é o nome: ");
console.log(nome("Bruno"));


// Quando temos apenas um parâmetro, podemos escrever a arrow function dessa forma:
const nome2 = n2 => {
    return n2;
} 
// Ou seja, nós omitimos os parênteses que ficariam em volta de n2

// Caso tenhamos uma unica linha de função podemos sumprimir a palavra return e as chaves
const nome3 = n3 => n3;

console.log("Este é o nome 3: ");
console.log(nome3("nome3"));

/////////////////////////////////////////////////////////////////////
/*
    RESUMINDO:

    - temos um parâmetro de entrada: não precisamos do parenteses

    - temos uma operação simples: não precisamos do return e das chaves

    - caso tenhamos uma operação mais complexa: usar a forma completa da arrow functions
*/



