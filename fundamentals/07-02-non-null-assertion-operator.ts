let courseId : number | null;

/*
    ts(2451) significa que estou usando uma variável com o 
    mesmo nome em outro arquivo do projeto e o typescript
    está me mostrando isso, caso eu queira utilizar um import.
*/

courseId!.toString();

/*
    courseId.toString(); -- maneira trivial
    courseId?.toString(); - caso courseId seja opcional
    courseId!.toString(); - caso estejamos afirmando que courseId não é nulo
*/


