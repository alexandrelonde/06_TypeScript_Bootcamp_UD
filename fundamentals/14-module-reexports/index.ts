
// Fizemos o import de vários arquivos dessa pasta
import {Course} from "./course-model";
import {loadAllCourses} from "./feature-1";
import {saveCourse} from "./feature-2";

// Vamos reexportar 
export {
    Course,
    loadAllCourses,
    saveCourse
};
