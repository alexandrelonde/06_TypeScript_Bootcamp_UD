"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
var CourseService = /** @class */ (function () {
    function CourseService() {
        console.log("The CourseService was initialized.");
    }
    // Método estático
    CourseService.instance = function () {
        if (!CourseService.INSTANCE) {
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE;
    };
    return CourseService;
}());
exports.CourseService = CourseService;
/*
    Para atingir nosso propósito vamos colocar o contrutor como privado. Como
    o construtor é um tipo especial de método, o mesmo será acessado por um outro
    método dentro da classe, já que o mesmo está como private.

    Lembrando que um método com um modificador de acesso private, só pode ser acessado
    dentro da classe. Como está como private, ele terá um erro de compilação, quando
    fora da classe eu chamar o contrutor com a palavra new.

    Para acessar o construtor, só será possível por meio de um método que esteja
    dentro da classe CourseService.

    Como eu quero um método para acessar todas as instâncias da classe e que nesse caso,
    eu quero acessar a única instância da classe, vamos utilizar um método estático. E
    aí então este método irá chamar o construtor.
*/ 
