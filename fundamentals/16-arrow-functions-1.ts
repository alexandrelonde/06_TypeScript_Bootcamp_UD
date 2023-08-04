/*
    Vamos começar com o básico de como o this funciona no JavaScript e, 
    portanto, no TypeScript, que é uma extensão do JavaScript. O this é 
    uma palavra-chave especial em JavaScript que é determinada pelo 
    contexto de execução, ou seja, "onde" a função é chamada, não onde é 
    definida. Por exemplo, se você tiver um objeto com um método, e chamar 
    esse método no objeto, this será definido como o próprio objeto.
*/

let meuObjeto = {
    nome: 'Meu Objeto',

    dizerNome: function() {
        console.log(this.nome);
    }
}

meuObjeto.dizerNome();


/*
    Entendendo uma função callback

    Podemos entender uma função callback como uma função que é passada 
    como parâmetro para outra função. Vamos ver um exemplo simplificado:
*/

function minhaFuncaoCallback() {
    console.log('Eu sou uma funcao callback!');
}

function funcaoQueRecebeCallback(callback) {
    console.log('Estou prestes a chamar a funcao de callback!');
    callback();
}

// Aqui callback é um argumento da função e também é uma função, ou seja, 
/*
    callback é argumento de funcaoQueRecebeCallback

    callback é do tipo da função minhaFuncaoCallback
    a função minhaFuncaoCallback devolve um valor que é passado como parâmetro
    para callback que é um argumento da função funcaoQueRecebeCallback

    Resumindo, estamos pasando uma função como parâmetro para outra
*/

funcaoQueRecebeCallback(minhaFuncaoCallback);

/*
    funcaoQueRecebeCallback -> função "pricipal"
    minhaFuncaoCallback -> função parâmetro
*/

/*
    Vamos entender um pouco da função setTimout, e associado a mesma vamos entender
    a dinâmica das arrow functions.

    setTimeout é comumente usada para agendar a execução de algum código após um certo 
    período de tempo. Aqui está um exemplo bastante simples de como você pode usar 
    setTimeout:
*/

function dizerOla() {
    console.log('Ola mundo!');
}

// vamos agendar a função dizerOla para ser chamada após 2 segundos (2000 milissegundos)
setTimeout(dizerOla, 2000);

/*
    Ou seja, quando compilamos o programa, tudo "agiu" instantâneamente, mas a frase
    "Ola mundo" demorou 2 segundos para aparecer, isso por que foi agendada para aparecer
    2 segundos mais tarde.
*/

/*
    Os passos vistos acima, da linha 64 a 69 podem ser aglutinados de duas formas:
    por meio de uma função anônima, ou seja, uma função que é declarada mas não 
    tem nome (a chamamos apenas com o function e não colocamos nome), muito usada
    quando vamos passar o valor da função como parâmetro ou armzena-lo em uma variável.

    Ou podemos aglutinar o código por meio de uma arrow function.
*/

// Aglutinando o código por meio de uma função anônima
setTimeout(function() {
    console.log('Ola mundo!');
}, 2000);

/*
    Note que colocamos apenas a palavra function e não colocamos nenhum nome.
    Isso é uma função anônima. Veja também que passamos a função inteira dentro
    do parenteses de setTimeout, ou seja, passamos uma função inteira como parâmetro,
    isso nada mais é que uma função callback. Poderiamos ter dado um nome para função
    e ter passado a mesma como uma função callback vista acima.
*/


// Aglutinando o código por meio de uma arrow function
setTimeout(() => {
    console.log('Ola mundo!');
}, 2000);

/*
    Substituimos
        function()
    por
        () =>
*/
