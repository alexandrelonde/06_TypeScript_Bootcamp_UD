/*
    uma classe abstrata é vista com um template e não pode ser instanciada.
    Para isso, criamos subclasses concretas que o serão. Dentro dessa perspectiva,
    utilizamos modificadores de acesso para gerir essa dinâmica.
    Ou seja, a classe abstrata é um contrato que a subclasse terá de implementar.
*/

class Course75 {

    // Propriedades estáticas
    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    constructor(
        protected _title: string,
        protected price: number,
        protected subtitle = "",
        protected creationDate = new Date(2021, 2, 3)
    ) {
        this.validate();

        Course75.TOTAL_COURSES++;
    }

    // Método protected -> visto pela classe e suas subclasses
    protected validate() {
        console.log(`Called Course validate()`);
        if(this.price <= 0) {
            throw "Price must be larger than zero!"
        }
    }

    // Método static -> comum a todas a instâncias da classe
    static printTitle(course: Course75) {
        console.log(`The title of the course is: ${course.title}`)
    }

    // Métodos get e set que precisam ser acessados fora da classe
    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty!";
        }
         this._title = newTitle;
    }


}
