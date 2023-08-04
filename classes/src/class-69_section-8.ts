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

class CourseProgram {

    constructor(
        private _title: string,
        private subtitle = '',
        private creationDate = new Date(2000, 1, 1)
    ) {

    }

    // Métodos - usando get e set
    get title() {
        return this._title; // Utilizamos o "this" para retornar o valor
    }

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty!"
        }

        newTitle = this._title; // Utilizamos o "this" para definir um valor
    }

    /*
        Utilizamos o par de métodos title para o get e set para trabalharmos
        os valores no método pegando ou definindo esse valor.
    */

}

// Vamos criar as várias instâncias da classe

const typescript = new CourseProgram("TypeScript Bootcamp");

const angular = new CourseProgram("Angular Core");

// Imprimindo os títulos dos cursos no console
console.log(typescript.title);

console.log(angular.title);






