import './style.css'

import projectManager from './js/projectManager'
import todoManager from './js/toDoManager';


const defaultProject = projectManager.createNewProject('default');
console.log(defaultProject);

todoManager.createNewTodo(defaultProject, 'todo 1', 'do tasks', null, 'high')

console.log("projects", projectManager.viewAllProjects(defaultProject))
console.log('todos in default project', projectManager.viewTodosInProject(defaultProject))