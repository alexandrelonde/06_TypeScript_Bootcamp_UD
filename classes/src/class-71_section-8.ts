/*
    Na aula passada vimos as propriedades estáticas, agora nessa aula 
    iremos ver os métodos estáticos. O que fizemos na aula passada foi
    definir uma propriedade estática que era comum a todas as instancias
    da classe. Por isso a definimos antes do construtor mas dentro da 
    classe.

    Vamos pegar a ideia de propriedade estática e aplica-la a métodos 
    estáticos.
*/

class Course71 {

    
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
        Course71.TOTAL_COURSES++;

    }

    // Método estático
    static printTitle(course: Course71) {
        console.log(`The title of the course is: ${course.title}`)

        /*
            mesmo se eu colocar o this aqui dentro não irei acessar as variáveis
            que estão dentro dos parâmetros do construtor, pois essas variáveis 
            são para cada instancia em questão e não para uma variável estática.
        */
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

Course71.TOTAL_COURSES;

const typescript71 = new Course71(Course71.TYPESCRIPT_TITLE);
/*
    ou seja, após eu chamar o construtor, Course70.TOTAL_COURSES incrementa
    uma unidade, com isso, no final temos o número 1 no console.
*/

// Ou seja, o método estático é acessado via o nome da classe -> Course71
Course71.printTitle(typescript71);

console.log(Course71.TOTAL_COURSES)