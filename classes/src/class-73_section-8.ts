/*
    Nessa aula vamos aprender sobre inheritance ou no português -> herança
    ao construirmos uma classe filha ou subclasse, a mesma herda as propriedades
    e métodos da classe pai, podendo então ter suas proprias propriedades e métodos
    ou sobrescrever os da classe pai.
*/

class Course73 {
    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"; // propriedade estática

    constructor(
        private _title: string,
        private price: number,
        private subtitle = "",
        private creationDate = new Date(2021, 1, 1)
    ) {

        this.validate();

        Course73.TOTAL_COURSES++;

    }

    validate() {
        console.log(`Called Course73 validate()`);
        if(this.price <= 0) {
            throw "Price must be larger than zero!";
        }
    }

    /*
        Este método acima valida o preço do curso. Se o preço, mais especificamente 
        no nosso caso a propriedade preço da instancia da classe for menor ou igual
        a zero, teremos um erro.

        Vale lembrar que, e se fizermos um curso que é gratuito? Então vamos aprender
        na próxima aula com herança como lidar com essa questão.
    */


    // Método estático
    static printTitle(course: Course73) {
        console.log(`The title of the course ${course.title}`)
    }


    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        if(!newTitle) {
            throw "Title cannot be empty"
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

// criando uma classe filha utilizando a palavra extends
class FreeCourse extends Course73 {

    constructor(
        title: string,
        subtitle = "",
        creationDate = new Date(2021, 1, 1)
    ) {
        super(title, 0, subtitle, creationDate);
        /*
            Quando utilizamos a palavra super aqui significa que estamos 
            puxando os dados em relação à classe pai.
        */
    }

    /*
        Temos então que criar um novo método chamado validate para sobrescrevermos
        o método da classe pai. Caso não o façamos, teremos a validação vinda da 
        classe pai e não adiantará ter criado uma classe filha para excessão referindo
        a cursos grátis.
    */
    validate() {
        console.log(`Called FreeCourse validate()`);
    }
    /*
        Ao fazermos um método com o mesmo nome na classe filha e com um novo 
        código, a lógica do método da classe filha sobrescreve o método da 
        classe pai. Com isso não temos a validação anterior e podemos exibir 
        cursos gratuitos normalmente.
    */

}

const typescript73 = new Course73(Course73.TYPESCRIPT_TITLE, 100);

console.log(typescript73.title);

const angular73 = new FreeCourse("Angular For Beginners");

console.log(angular73);