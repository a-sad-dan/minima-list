import './style.css'
import './layout.js'

import { Task, Subtask } from './task.js'
import { Project } from './project.js'

// Generating subtasks
let subtasks1 = [
    new Subtask("Subtask 1"),
    new Subtask("Subtask 2")
];

let subtasks2 = [
    new Subtask("Subtask A"),
    new Subtask("Subtask B")
];

let subtasks3 = [
    new Subtask("Subtask X"),
    new Subtask("Subtask Y")
];

// Generating tasks
let tasks1 = [
    new Task("Task A", "2023-09-10", 1, false, subtasks1),
    new Task("Task B", "2023-09-12", 0, false, subtasks2)
];

let tasks2 = [
    new Task("Task 1", "2023-09-14", 2, false, subtasks3)
];

// Generating projects
let projectsArr = [
    new Project("Home", tasks1),
    new Project("Gym", tasks2)
];

// Console log the projectsArr to see the generated structure
console.table(projectsArr);

projectsArr.forEach(project => {
   console.table(project.getTasks()) 
});