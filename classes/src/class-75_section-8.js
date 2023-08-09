/*
    uma classe abstrata é vista com um template e não pode ser instanciada.
    Para isso, criamos subclasses concretas que o serão. Dentro dessa perspectiva,
    utilizamos modificadores de acesso para gerir essa dinâmica.
    Ou seja, a classe abstrata é um contrato que a subclasse terá de implementar.
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
var Course75 = /** @class */ (function () {
    function Course75(_title, price, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 2, 3); }
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.validate();
        Course75.TOTAL_COURSES++;
    }
    // Método protected -> visto pela classe e suas subclasses
    Course75.prototype.validate = function () {
        console.log("Called Course75 validate()");
        if (this.price <= 0) {
            throw "Price must be larger than zero!";
        }
    };
    // Método static -> comum a todas a instâncias da classe
    Course75.printTitle = function (course) {
        console.log("The title of the course is: ".concat(course.title));
    };
    Object.defineProperty(Course75.prototype, "title", {
        // Métodos get e set que precisam ser acessados fora da classe
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty!";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course75.prototype, "age", {
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
    // Propriedades estáticas
    Course75.TOTAL_COURSES = 0;
    Course75.TYPESCRIPT_TITLE = "Typescript Bootcamp";
    return Course75;
}());
var FreeCourse75 = /** @class */ (function (_super) {
    __extends(FreeCourse75, _super);
    function FreeCourse75(title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 4, 5); }
        return _super.call(this, title, 0, subtitle, creationDate) || this;
    }
    FreeCourse75.prototype.validate = function () {
        console.log("Called FreeCourse75 validate()");
    };
    return FreeCourse75;
}(Course75));
var typescript75 = new Course75(Course75.TYPESCRIPT_TITLE, 100);
console.log(typescript75.title);
var angular75 = new FreeCourse75("Angular Core");
console.log(angular75);
