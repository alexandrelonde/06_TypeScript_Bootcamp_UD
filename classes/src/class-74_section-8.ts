/*
    Quando colocamos o modificador de acesso protected em uma propriedade da 
    classe, essa propriedade pode ser acessada pela classe e pelas classes 
    filhas, mas a propriedade não se torna pública

    private ---> só é acessado dentro da classe

    protected -> só é acessado pela classe e pelas classes filhas

    public ----> é acessado em todo o lugar
*/

class Course74 {
    private static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"; // propriedade estática

    constructor(
        private _title: string,
        private price: number,
        private subtitle = "",
        private creationDate = new Date(2021, 1, 1)
    ) {

        this.validate();

        Course74.TOTAL_COURSES++;

    }

    protected validate() {
        console.log(`Called Course74 validate()`);
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
    static printTitle(course: Course74) {
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
class FreeCourse74 extends Course74 {

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
    protected validate() {
        console.log(`Called FreeCourse74 validate()`);
    }
    /*
        Ao fazermos um método com o mesmo nome na classe filha e com um novo 
        código, a lógica do método da classe filha sobrescreve o método da 
        classe pai. Com isso não temos a validação anterior e podemos exibir 
        cursos gratuitos normalmente.
    */

    /*
        Vamos colocar protected neste método da subclasse também porque o mesmo
        só precisa ser acessado dentro dela ou de suas subclasse, e é chamado
        pelo construtor.
    */

}

const typescript74 = new Course74(Course74.TYPESCRIPT_TITLE, 100);

console.log(typescript74.title);

const angular74 = new FreeCourse74("Angular For Beginners");

console.log(angular74);