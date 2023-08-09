export interface HasId {
    // uma váriavel do tipo string
    id: string;
    // um método abstrato
    printId();
}

/*
    Importante ressaltar que em uma interface, por padrão os métodos
    criados são abstratos, ou seja, seram concretizados em um outro
    lugar onde forem aplicados.
*/

/*
    Assim como criamos uma subclasse a partir de uma classe, seja uma 
    classe concreta ou uma classe abstrata, as interfaces podem ser 
    extendidas uma da outra.
*/

export interface HasTitle extends HasId {
    title: string;
}