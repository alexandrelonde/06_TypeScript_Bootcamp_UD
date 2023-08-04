/*
    Nessa aula vamos aprender sobre inheritance ou no português -> herança
    ao construirmos uma classe filha ou subclasse, a mesma herda as propriedades
    e métodos da classe pai, podendo então ter suas proprias propriedades e métodos
    ou sobrescrever os da classe pai.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course73 = /** @class */ (function () {
    function Course73(_title, price, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 1, 1); }
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.validate();
        Course73.TOTAL_COURSES++;
    }
    Course73.prototype.validate = function () {
        console.log("Called Course73 validate()");
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
    Course73.printTitle = function (course) {
        console.log("The title of the course ".concat(course.title));
    };
    Object.defineProperty(Course73.prototype, "title", {
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
    Object.defineProperty(Course73.prototype, "age", {
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
    Course73.TOTAL_COURSES = 0;
    Course73.TYPESCRIPT_TITLE = "Typescript Bootcamp"; // propriedade estática
    return Course73;
}());
// criando uma classe filha utilizando a palavra extends
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    function FreeCourse(title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 1, 1); }
        return _super.call(this, title, 0, subtitle, creationDate) || this;
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
    FreeCourse.prototype.validate = function () {
        console.log("Called FreeCourse validate()");
    };
    return FreeCourse;
}(Course73));
var typescript73 = new Course73(Course73.TYPESCRIPT_TITLE, 100);
console.log(typescript73.title);
var angular73 = new FreeCourse("Angular For Beginners");
console.log(angular73);
