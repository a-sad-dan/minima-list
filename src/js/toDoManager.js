// Responsibility: Handles application logic related to todos.

import { createTodo } from "./toDoFactory";

import projectManager from "./projectManager";
import LocStorage from "./localStorage";


const todoManager = (() => {

    const createNewTodo = (project, title, description, dueDate, priority, isDone = false) => {
        console.log('project that was passed is', project)

        const newTodo = createTodo(title, description, dueDate, priority, isDone);
        project.addTodo(newTodo);
        LocStorage.saveArray();
    }
    const editTodo = (todo, newTitle, newDescription, newDueDate, newPriority) => {
        todo.updateTodo(newTitle, newDescription, newDueDate, newPriority);
        LocStorage.saveArray();
    }

    const deleteTodo = (todo) => {
        const activeProject = projectManager.getActiveProject();
        if (activeProject) { activeProject.removeTodo(todo) }
        LocStorage.saveArray();
    }

    const toggleTodoStatus = (todo) => {
        todo.toggleStatus()
        LocStorage.saveArray();
    }

    return {
        createNewTodo,
        editTodo,
        deleteTodo,
        toggleTodoStatus,
    };
})();


export default todoManager;
// wrap above in I.I.F.E