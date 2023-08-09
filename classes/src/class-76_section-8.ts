/*
    Nessa aula vamos falar de interfaces. Como vimos classes abstratas
    vamos tentar diferencias uma da outra e verificar em quais contextos
    cada uma é utilizada.
    Vale lembrar que as mesmas podem ser implmentadas em conjunto, não
    excluindo a paossibilidade de usar ambas simultaneamente, cada uma 
    com seu papel.
*/

import { HasId, HasTitle } from "./class-76_interfaces";
/*
    Como exportamos a interface de outro arquivo e queremos utiliza-la 
    neste aquiro, colocamos o import referente a interface utilizada.
*/

abstract class Course76 implements HasTitle {

    // Propriedades estáticas
    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    protected constructor(
        public id: string,
        protected _title: string,
        protected price: number,
        protected subtitle = "",
        protected creationDate = new Date(2021, 2, 3)
    ) {
        this.validate();

        Course76.TOTAL_COURSES++;
    }

    printId() {
        console.log(`The course id is: ${this.id}`);
    }

    // Método protected -> visto pela classe e suas subclasses
    protected abstract validate();

    // Método static -> comum a todas a instâncias da classe
    static printTitle(course: Course76) {
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

    get age(){
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

}


class FreeCourse76 extends Course76 {

    constructor (
        id: string,
        title: string,
        subtitle = "",
        creationDate = new Date(2021, 4, 5)
    ) {
        super(id, title, 0, subtitle, creationDate);
    }

    protected validate() {
        console.log(`Called FreeCourse75 validate()`);
    }
}


// const angular76 = new FreeCourse76("Angular Core");

// console.log(angular76);
