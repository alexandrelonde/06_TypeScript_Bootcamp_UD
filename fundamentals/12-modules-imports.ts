import {PAGE_SIZE, COURSE} from "./12-modules-exports";


const pageSize = PAGE_SIZE;


//import {Course, loadAllCourses, saveCourse} from "./14-module-reexports/exports";

// Se mudarmos o nome do arquivo exports.ts para index.ts, este é o nome padrão
// Para exportação de um conjunto de arquivos, então ficamos com o import:

import {Course, loadAllCourses, saveCourse} from "./14-module-reexports";


import printCourse from "./15-default-exports";

import * as constants from "./15-default-exports";

printCourse({});