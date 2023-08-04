class Course70 {

    
    static TOTAL_COURSES = 0; // propriedade estática e tem por padrão toda as letras em maiúsculo
    // Essa propriedade estática está associada a todas as instancias da classe
    /*
        Ou seja, uma propriedade estática pertece a propria classe e não a uma instancia 
        em específico. Note que a nossa propriedade estática está associada ao numero total
        de cursos instanciados na classe. Então quer dizer que uma propriedade estática 
        fára parte da classe e tera seu valor alterado e não mais de uma instanciação, por 
        isso, estática.
    */

    // Podemos também declarar constantes aqui
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";

    constructor(
        private _title: string,
        private subtitle = "",
        private creationDate = new Date(2021, 2, 3)

        /*
            MUITO CUIDADO!
            private title: string, ------------> definindo o tipo da varíavel (type anotation)
            pritate title = "Título inicial", -> inicializando
        */
    ) {

        // Trabalhando a variável estática no corpo do construtor
        Course70.TOTAL_COURSES++;

    }

    // Métodos
    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }
        newTitle = this._title; // Utilizamos o "this" para definir um valor
    }
}

Course70.TOTAL_COURSES;

const typescript70 = new Course70(Course70.TYPESCRIPT_TITLE);
/*
    ou seja, após eu chamar o construtor, Course70.TOTAL_COURSES incrementa
    uma unidade, com isso, no final temos o número 1 no console.
*/

console.log(typescript70.title);

console.log(Course70.TOTAL_COURSES);