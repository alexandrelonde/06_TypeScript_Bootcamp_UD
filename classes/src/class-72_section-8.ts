/*
    Nessa aula vamos aprender sobre inheritance ou no português -> herança
    ao construirmos uma classe filha ou subclasse, a mesma herda as propriedades
    e métodos da classe pai, podendo então ter suas proprias propriedades e métodos
    ou sobrescrever os da classe pai.
*/

class Course72 {
    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"; // propriedade estática

    constructor(
        private _title: string,
        private price: number,
        private subtitle = "",
        private creationDate = new Date(2021, 1, 1)
    ) {

        this.validate();

        Course72.TOTAL_COURSES++;

    }

    validate() {
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
    static printTitle(course: Course72) {
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


const typescript72 = new Course72(Course72.TYPESCRIPT_TITLE, 100);

console.log(typescript72.title);

const angular72 = new Course72("Angular For Beginners", 0);

Course72.printTitle(typescript72);