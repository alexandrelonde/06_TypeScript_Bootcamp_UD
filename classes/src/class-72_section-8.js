/*
    Nessa aula vamos aprender sobre inheritance ou no português -> herança
    ao construirmos uma classe filha ou subclasse, a mesma herda as propriedades
    e métodos da classe pai, podendo então ter suas proprias propriedades e métodos
    ou sobrescrever os da classe pai.
*/
var Course72 = /** @class */ (function () {
    function Course72(_title, price, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 1, 1); }
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.validate();
        Course72.TOTAL_COURSES++;
    }
    Course72.prototype.validate = function () {
        if (this.price <= 0) {
            throw "Price must be larger than zero!";
        }
    };
    /*
        Este método acima valida o preço do curso. Se o preço, mais especificamente
        no nosso caso a propriedade preço da instancia da classe for menor ou igual
        a zero, teremos um erro.

        Vale lembrar que, e se fizermos um curso que é gratuito? Então vamos aprender
        na próxima aula com herança como lidar com essa questão.
    */
    // Método estático
    Course72.printTitle = function (course) {
        console.log("The title of the course ".concat(course.title));
    };
    Object.defineProperty(Course72.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course72.prototype, "age", {
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDate.getTime();
            // Corrigindo a conversão de milessegundos para dias
            var ageInDays = ageInMs / (1000 * 60 * 60 * 24);
            // Corrigindo a conversão de dias para anos
            var ageInYears = ageInDays / 365;
            return Math.round(ageInYears);
            /*
                A função Math.round é uma função utilizada para arredondar o
                número para o número inteiro mais próximo. É uma função utilizada
                tanto em JavaScript quanto em TypeScript.
            */
        },
        enumerable: false,
        configurable: true
    });
    Course72.TOTAL_COURSES = 0;
    Course72.TYPESCRIPT_TITLE = "Typescript Bootcamp"; // propriedade estática
    return Course72;
}());
var typescript72 = new Course72(Course72.TYPESCRIPT_TITLE, 100);
console.log(typescript72.title);
var angular72 = new Course72("Angular For Beginners", 0);
Course72.printTitle(typescript72);
