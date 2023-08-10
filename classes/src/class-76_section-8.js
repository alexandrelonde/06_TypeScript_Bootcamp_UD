"use strict";
/*
    Nessa aula vamos falar de interfaces. Como vimos classes abstratas
    vamos tentar diferencias uma da outra e verificar em quais contextos
    cada uma é utilizada.
    Vale lembrar que as mesmas podem ser implmentadas em conjunto, não
    excluindo a paossibilidade de usar ambas simultaneamente, cada uma
    com seu papel.
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
Object.defineProperty(exports, "__esModule", { value: true });
var class_77_section_8_1 = require("./class-77_section-8");
/*
    Como exportamos a interface de outro arquivo e queremos utiliza-la
    neste aquiro, colocamos o import referente a interface utilizada.
*/
var Course76 = /** @class */ (function () {
    function Course76(id, _title, price, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 2, 3); }
        this.id = id;
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.validate();
        var service = class_77_section_8_1.CourseService.instance();
        Course76.TOTAL_COURSES++;
    }
    Course76.prototype.printId = function () {
        console.log("The course id is: ".concat(this.id));
    };
    // Método static -> comum a todas a instâncias da classe
    Course76.printTitle = function (course) {
        console.log("The title of the course is: ".concat(course.title));
    };
    Object.defineProperty(Course76.prototype, "title", {
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
    Object.defineProperty(Course76.prototype, "age", {
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
    Course76.TOTAL_COURSES = 0;
    Course76.TYPESCRIPT_TITLE = "Typescript Bootcamp";
    return Course76;
}());
var FreeCourse76 = /** @class */ (function (_super) {
    __extends(FreeCourse76, _super);
    function FreeCourse76(id, title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2021, 4, 5); }
        return _super.call(this, id, title, 0, subtitle, creationDate) || this;
    }
    FreeCourse76.prototype.validate = function () {
        console.log("Called FreeCourse75 validate()");
    };
    return FreeCourse76;
}(Course76));
var angular76 = new FreeCourse76("1", "Angular Core");
class_77_section_8_1.CourseService.instance();
console.log(angular76);
