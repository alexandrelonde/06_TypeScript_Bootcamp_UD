/*
    Vamos entender arrow functions como um mecanismo de representar funções
    anônimas. Vale lembrar também que temos que assciar funções anônimas a
    uma variável.
*/
var soma = function (v1, v2) {
    return v1 + v2;
};
var soma2 = function (v1, v2) {
    return v1 + v2;
};
console.log("Este é o valor da soma 1: ");
console.log(soma(4, 7));
console.log("Este é o valor da soma 2: ");
console.log(soma2(3, 5));
// PECULIARIDADES DA ARROW FUNCTION
var nome = function (n) {
    return (n);
};
console.log("Este é o nome: ");
console.log(nome("Bruno"));
// Quando temos apenas um parâmetro, podemos escrever a arrow function dessa forma:
var nome2 = function (n2) {
    return n2;
};
// Ou seja, nós omitimos os parênteses que ficariam em volta de n2
var nome3 = function (n3) { return n3; };
console.log("Este é o nome 3: ");
console.log(nome3("nome3"));
