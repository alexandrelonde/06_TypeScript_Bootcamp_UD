/*
    Vamos verificar nessa aula se o TypeScript suporta multiplos construtores.
    Já adiantando, isso não é possível. Isso porque esta linguagem pega as 
    melhores características de outras, permite a possbilidade de inicializarmos
    algum atributo (propriedade) dentro da própria classe, não tendo necessariamente
    que colocar o tipo da variável por causa da característica da linguagem de
    type inference (inferência de tipo). 

    o fato e inicializar uma propriedade se chama default parameters (parâmetros padrão)
*/

class CourseDetail68 {

    constructor(
        private _title: string,
        private subtitle = "",
        private creationDate = new Date(2021,2,2) // CUIDADO! creationDate é do tipo da classe Date
    ) {

    }

    // Métodos
    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty"
        }

        this._title = newTitle;
    }

    get title(){
        return this._title;
    }

    get ageDetail() {
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        // Corrigindo a conversão de milessegundos para dias
        const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

        // Corrigindo a conversão de dias para anos
        const ageInYears = ageInDays / 365;

        return Math.round(ageInYears);
    }
}

// Instanciando uma classe com apenas um dos parâmetros (os outros já foram inicializados)
const courseDetail68 = new CourseDetail68(
    "TypeScript Bootcamp"
);

// IMPORTANTE!!! Instanciar uma classe é diferente de alterar depois o seu valor por meio de um método

/*
    Caso fosse utilizado um método aqui para altarar o valor de algum dos atributos, utlizariamos um método
    associado a partícula "set", ou se eu fosse pegar o retorno de um método, eu o utilizaria com o auxilo
    da partícula "get".
*/

console.log("Imprimindo todas as caracteristicas do curso: ");
console.log(courseDetail68);


console.log("Imprimindo apenas o título do curso: ");
console.log(courseDetail68.title);

/*
    Essa parte onde imprimimos apenas o título do curso é extremamente importante de frisar.
    Isso por que mesmo para acessar um atributo (propriedade) para ser impresso no console,
    temos que utiliar um método do tipo get, visto que definimos as propriedades como "private".
    Então, mesmo uma tarefa simples como imprimir no console necessita do get.

    Utilizamos um metodo com o mesmo nome, tanto no set quanto no get. Na verdade, isso foi 
    proposital, visto que é são um par de maneiras utilizadas para definir e pegar o valor 
    de um método, que no nosso caso é o title, ou se preferir, definir o valor de _title.
*/




