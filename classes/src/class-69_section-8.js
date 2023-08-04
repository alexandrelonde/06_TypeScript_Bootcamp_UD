/*
    Nesta aula vamos ver a importância e o contexto de se utilizar a palavra "this"
    "this" significa, este, esta, esse, essa. Então quando vamos nos referir a uma
    propriedade em específico, vamos utilizar o "this" para acessa-la.
    Isso foi mostrado na aula passada. O que vamos acrescentar aqui é que podemos ter
    mais de uma varíavel no nosso programa do tipo da classe que criamos, ou seja,
    eu posso ter uma variável com o nome typescript, angular e assim por diante.
    Então isso quer dizer que uma classe pode ter várias instâncias.
    Vamos ver como irá funcionar:
*/
var CourseProgram = /** @class */ (function () {
    function CourseProgram(_title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDate === void 0) { creationDate = new Date(2000, 1, 1); }
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(CourseProgram.prototype, "title", {
        // Métodos - usando get e set
        get: function () {
            return this._title; // Utilizamos o "this" para retornar o valor
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty!";
            }
            newTitle = this._title; // Utilizamos o "this" para definir um valor
        },
        enumerable: false,
        configurable: true
    });
    return CourseProgram;
}());
// Vamos criar as várias instâncias da classe
var typescript = new CourseProgram("TypeScript Bootcamp");
var angular = new CourseProgram("Angular Core");
// Imprimindo os títulos dos cursos no console
console.log(typescript.title);
console.log(angular.title);
