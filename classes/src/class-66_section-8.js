/*
    Vamos supor que não queremos que as propriedades de uma classe sejam modificadas,
    ou seja, o valor das mesmas serão apenas para leitura. Sendo assim, as propriedades
    não podem ser alteradas nem fora da classe e nem dentro da mesma. Para isso procedemos
    da seguinte forma:
*/
var CourseDetail66 = /** @class */ (function () {
    function CourseDetail66(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    return CourseDetail66;
}());
