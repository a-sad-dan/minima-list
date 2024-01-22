// Responsibility: Manages DOM-related interactions and updates.
import projectManager from "./projectManager";

const projectsContainer = document.getElementById('projects-container');
const contentDiv = document.getElementById('content');
const subheading = document.getElementById('subheading');


import editIcon from './../assets/icons/pencil.svg'
import expandIcon from './../assets/icons/expand.svg'


const UIcontroller = (() => {
    const updateProjectList = () => {
        // update project list in UI
        projectsContainer.innerHTML = '';
        const allProjects = projectManager.viewAllProjects();
        allProjects.forEach((item) => { renderProject(item) })

    }

    const updateTodo = (project) => {
        // update todo list in UI
        contentDiv.innerHTML = ''
        // console.table(projectManager.viewTodosInProject(project));
        const allTodos = projectManager.viewTodosInProject(project)
        allTodos.forEach((item) => { renderTodo(item) });

        subheading.innerText = ` ${project.name}`

        updateProjectList()
    }

    const toggleExpandDetails = (todo) => {
        // Expand a todo item to display and edit its details
    }

    const showError = (message) => {
        //Display Error messages to the user
        const errorMessage = document.createElement('p')
        errorMessage.classList.add('error-message');
        Modal.renderModal(errorMessage);
    }
    const clearFields = () => {
        // Clear input field after input/editing todos
    }


    return { updateProjectList, updateTodo }
})();

export default UIcontroller;

import todoManager from "./toDoManager";
import ProjectForm from "../components/project-form/project-form";
import Modal from "../components/modal/modal";
import TaskForm from "../components/old-task-form/task-form";

// Helper Functions
const renderProject = (project) => {

    const card = projectCardGenerator(project);

    // Attach event listener to listen for render 
    card.addEventListener('click', (event) => {

        // make clicked project as active and render the tasks in it
        projectManager.switchProject(project);
        UIcontroller.updateTodo(projectManager.getActiveProject())

        // if edit button clicked
        if (event.target.matches('.edit-btn')) {
            Modal.renderModal(ProjectForm.newEditForm(project));
        }
    });

    // add card to sidebar
    projectsContainer.append(card);
}


const renderTodo = (todo) => {
    // console.log(todo);
    const todoCard = todoCardGenerator(todo);
    todoCard.addEventListener('click', (event) => handleTodoClick(event))

    //handle state of the todo card
    function handleTodoClick(event) {
        if (event.target.matches('.edit-btn')) {

            Modal.renderModal(TaskForm.editTodoForm(todo));
        }
        if (event.target.matches('.expand-btn')) toggleExpand();

        if (event.target.matches('.toggle-done')) {
            todoManager.toggleTodoStatus(todo);
            todoCard.classList.toggle('completed');
        };
        // console.table(projectManager.viewAllProjects()[0].todos);
    }
    contentDiv.append(todoCard);

    function toggleExpand() {
        todoCard.querySelector('.description').classList.toggle('hidden');
        todoCard.querySelector('.expand-btn').classList.toggle('flipped')
    }

}




const projectCardGenerator = (project) => {
    const card = document.createElement('div');
    card.classList.add('project-tab');
    card.dataset.name = project.name;
    const cardHtml = `
                    <span class = "symbol">${project.name[0]}</span>
                    <p class="name">${project.name}</p>
                    <p class="count">${project.todos.length}</p>
                    <button class="edit-btn" style = "background : url(${editIcon})"></button>
                `
    card.innerHTML = cardHtml;
    // console.log(card)
    return card;
}


const todoCardGenerator = (todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoCard.dataset.index = todo.index

    if (todo.isDone) todoCard.classList.add('completed');

    const cardHtml = `
                        <div class="priority ${todo.priority}">
                            <button class="toggle-done"> </button>
                        </div>
                        <div class="details">
                            <p class="title">${todo.title}</p>
                            <p class="due-date">${todo.dueDate}</p>
                            <p class = "description hidden">${todo.description}</p>
                        </div>
                        <div class = "actions">
                            <button class = "edit-btn" style ="background:url(${editIcon}) ;"></button>
                            <button class = "expand-btn" style ="background:url(${expandIcon})"></button>
                        </div>
                    `
    todoCard.innerHTML = cardHtml;
    return todoCard;
}