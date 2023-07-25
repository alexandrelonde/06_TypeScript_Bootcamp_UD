////////////////////////////////////////////////////////////////////////////////////////////////

// ========== PRIMEIRA MANEIRA DE COLOCAR UMA CLASSE NO PROGRAMA

// Definindo a classe
class Course {

    title: string; // Se colocarmos private, o atributo é acessado somente dentro da classe - ENCAPSULAMENTO
    subtitle: string;
    creationDate: Date;

    /*
        private title: string; // Se colocarmos private, o atributo é acessado somente dentro da classe - ENCAPSULAMENTO
        private subtitle: string;
        private creationDate: Date;

        Então, em geral, para a maioria das classes, você deseja definir suas variáveis membro como privadas.
        Em geral, isso é uma melhor prática orientada a objetos conhecida como ENCAPSULAMENTO. Portanto, com 
        o encapsulamento, garantimos que os dados da classe só podem ser modificados pela própria classe.
        Essa é uma melhor prática na programação orientada a objetos conhecida como encapsulamento. Com o 
        encapsulamento, os dados da classe são mantidos privados e, se alguém quiser modificar os dados de 
        uma instância da classe, terão que chamar explicitamente um método de modificação de dados.
    */

    // Construtor da classe - Inicializando a classe
    constructor(
        // Parâmetros do construtor
        title: string,
        subtitle: string,
        creationDate: Date
    ) {
        // Inicialização das propriedades da instância -> usando this
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
 
    // Método da classe que calcula a idade do curso em dias
    age(){
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        // Corrigindo a conversão de milessegundos para dias
        const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

        // Corrigindo a conversão de dias para anos
        const ageInYears = ageInDays / 365;

        return Math.round(ageInYears);

        /*
            A função Math.round é uma função utilizada para arredondar o
            número para o número inteiro mais próximo. É uma função utilizada
            tanto em JavaScript quanto em TypeScript. 
        */
    }

    /*
        Um método, é como uma função normal, mas é definido dentro do corpo de 
        uma classe e tem acesso à palavra-chave 'this', assim como em um construtor.
    */

}

// Criando uma nova instância da classe
const course = new Course(
    "TypeScript Bootcamp",
    "Learn the language fundamentals, build practical projects",
    new Date(2000, 1, 1)
);

/*
    A diferença entre instanciação e criar uma nova instância:
    Instanciação é o processo, e a instância é resultado do 
    processo. Quando estamos fazeno um new Course, estamos 
    fazendo uma instanciação, e adicionando uma nova instância
    course.
 */

// Imprimindo no console o retorno do método age da instanciação acima
console.log(course.age());
console.log(course.title);

////////////////////////////////////////////////////////////////////////////////////////////////

// ========== SEGUNDA MANEIRA DE COLOCAR UMA CLASSE NO PROGRAMA
/*        
    Com o TypeScrip temos uma maneira mais enxuta e menos verbosa de escrever 
    uma classe em um programa de modo que não temos que ficar repetindo os
    atributos da classe, tanto dentro da classe, como dentro do construtor.
    com isso podemos ter a seguinte notação:
*/

class Course2 {
    // Não colocamos os atributos aqui

    constructor(
        private title2: string,
        private subtitle2: string,
        private creationDate2: Date
    ) {
        // Não precisamos acessar os atributos aqui com o this
    }

    // E aqui colocamos os métodos normalmente

}

////////////////////////////////////////////////////////////////////////////////////////////////

// ========== COLOCANDO OS ATRIBUTOS DA CLASSE COMO SOMENTE LEITURA

/*
    Quando colocamos os atributos da classe como somente leitura, isso significa que
    os mesmos não podem ser alterados tanto fora da classe, quanto dentro da mesma.
    Para fazer essa modificação, colocamos depois do private, o termo readonly
*/

class Course3 {
    // Não colocamos os atributos aqui

    constructor(
        private readonly title3: string,
        private subtitle3: string,
        private creationDate3: Date
    ) {
        // Não precisamos acessar os atributos aqui com o this
    }

    // E aqui colocamos os métodos normalmente

}