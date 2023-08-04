var CourseDetail65 = /** @class */ (function () {
    /*
        Quando colocamos nossas propriedades privadas, onde as mesmas podem ser alteradas
        somente dentro da classe, esta é uma boa prática de programação orientada a objetos
        que é chamada de ENCAPSULAMENTO.
    */
    function CourseDetail65(title, subtitle, creationDate) {
        this.title = ''; // com isso a propriedade title é acessada apenas dentro da classe
        this.subtitle = '';
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    /*
        Caso eu deixe uma propriedade da classe como private, ela só será alterada dentro da classe.
        Para isso, eu crio um método dentro da mesma que me da acesso a mudança do valor da classe.

        Vale lembrar que quando não colocamos nenhum modificador de acesso, o mesmo já vem público
        por padrão, então não precisamos colocar "public" antes da propriedade se quisermos deixa-la
        pública.
    */
    CourseDetail65.prototype.changeTitle = function () {
        this.title = 'JavaScript Bootcamp';
    };
    // Métodos
    CourseDetail65.prototype.ageDetail = function () {
        var ageInMs = new Date().getTime() - this.creationDate.getTime();
        // Corrigindo a conversão de milessegundos para dias
        var ageInDays = ageInMs / (1000 * 60 * 60 * 24);
        // Corrigindo a conversão de dias para anos
        var ageInYears = ageInDays / 365;
        return Math.round(ageInYears);
    };
    return CourseDetail65;
}());
// Criando uma nova instância da classe
var courseDetail65 = new CourseDetail65("TypeScript Bootcamp 65", "Learn the language fundamentals, build practical projects", new Date(2022, 1, 1));
// Imprimindo no console o retorno do método 
// console.log(courseDetail65.title);
console.log(courseDetail65.subtitle);
console.log(courseDetail65.ageDetail());
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Vimos o quanto é trabalhoso declarar uma classe, seu construtor e a sua instanciação.
    Mas acontece que o TypeScript tem uma maneira mais enxuta de escrever esse procedimento.
    Para não haver duplicidade, vamos mudar o nome da classe e de algumas variáveis se for
    preciso, para então escrever a classe dessa maneira mais resumida.
*/
var CourseDetail65a = /** @class */ (function () {
    function CourseDetail65a(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    return CourseDetail65a;
}());
var CourseDetail65b = /** @class */ (function () {
    function CourseDetail65b(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    return CourseDetail65b;
}());
/*
    Observe que, se você remover o modificador de visibilidade explícito, ou seja, o "private",
    então 'title' vai se tornar um parâmetro da função constructor, e ele não será mais uma
    variável de membro. Isso nos gerará um erro de compilação dizendo que a propriedade não
    existe mais na nossa classe.
*/
