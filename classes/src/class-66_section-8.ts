/*
    Vamos supor que não queremos que as propriedades de uma classe sejam modificadas,
    ou seja, o valor das mesmas serão apenas para leitura. Sendo assim, as propriedades
    não podem ser alteradas nem fora da classe e nem dentro da mesma. Para isso procedemos
    da seguinte forma:
*/

class CourseDetail66 {

    constructor(
        private readonly title: string,
        private readonly subtitle: string,
        private readonly creationDate: Date
    ) {

    }

    // Métodos
    /*
        setTitle() {
            this.title = ''; // Irá indicar que 'title' é somente de leitura
        }
    */
}