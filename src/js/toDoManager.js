// Responsibility: Handles application logic related to todos.

import { createTodo } from "./toDoFactory";

const todoManager = (() => {

    const createNewTodo = (project, title, description, dueDate, priority) => {
        const newTodo = createTodo(title, description, dueDate, priority);
        project.addTodo(newTodo);
    }
    const editTodo = (todo, newTitle, newDescription, newDueDate, newPriority) => {
        todo.updateTodo(newTitle, newDescription, newDueDate, newPriority);
    }

    const deleteTodo = (todo) => {
        if (activeProject) { activeProject.removeTodo(todo) }
    }

    const toggleTodoStatus = (todo) => todo.toggleStatus()

    return {
        createNewTodo,
        editTodo,
        deleteTodo,
        toggleTodoStatus,
    };
})();


export default todoManager;
// wrap above in I.I.F.E