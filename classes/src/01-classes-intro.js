////////////////////////////////////////////////////////////////////////////////////////////////
// ========== PRIMEIRA MANEIRA DE COLOCAR UMA CLASSE NO PROGRAMA
// Definindo a classe
var Course = /** @class */ (function () {
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
    function Course(
    // Parâmetros do construtor
    title, subtitle, creationDate) {
        // Inicialização das propriedades da instância -> usando this
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    // Método da classe que calcula a idade do curso em dias
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDate.getTime();
        // Corrigindo a conversão de milessegundos para dias
        var ageInDays = ageInMs / (1000 * 60 * 60 * 24);
        // Corrigindo a conversão de dias para anos
        var ageInYears = ageInDays / 365;
        return Math.round(ageInYears);
        /*
            A função Math.round é uma função utilizada para arredondar o
            número para o número inteiro mais próximo. É uma função utilizada
            tanto em JavaScript quanto em TypeScript.
        */
    };
    return Course;
}());
// Criando uma nova instância da classe
var course = new Course("TypeScript Bootcamp", "Learn the language fundamentals, build practical projects", new Date(2000, 1, 1));
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
var Course2 = /** @class */ (function () {
    // Não colocamos os atributos aqui
    function Course2(title2, subtitle2, creationDate2) {
        this.title2 = title2;
        this.subtitle2 = subtitle2;
        this.creationDate2 = creationDate2;
        // Não precisamos acessar os atributos aqui com o this
    }
    return Course2;
}());
////////////////////////////////////////////////////////////////////////////////////////////////
// ========== COLOCANDO OS ATRIBUTOS DA CLASSE COMO SOMENTE LEITURA
/*
    Quando colocamos os atributos da classe como somente leitura, isso significa que
    os mesmos não podem ser alterados tanto fora da classe, quanto dentro da mesma.
    Para fazer essa modificação, colocamos depois do private, o termo readonly
*/
var Course3 = /** @class */ (function () {
    // Não colocamos os atributos aqui
    function Course3(title3, subtitle3, creationDate3) {
        this.title3 = title3;
        this.subtitle3 = subtitle3;
        this.creationDate3 = creationDate3;
        // Não precisamos acessar os atributos aqui com o this
    }
    return Course3;
}());
