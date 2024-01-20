// Responsibility: Manages DOM-related interactions and updates.
import projectManager from "./projectManager";

const projectsContainer = document.getElementById('projects-container');
const contentDiv = document.getElementById('content')


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

    }

    const expandTodoDetails = (todo) => {
        // Expand a todo item to display and edit its details
    }

    const showError = () => {
        //Display Error messages to the user
    }
    const clearFields = () => {
        // Clear input field after input/editing todos
    }


    return { updateProjectList, updateTodo }
})();

export default UIcontroller;


// Helper Functions
const renderProject = (project) => {
    // console.log(project)
    // change this function to make dom elements and append them to the projects Div
    projectsContainer.append(projectCardGenerator(project));
}

const renderTodo = (todo) => {
    // console.log(todo);
    contentDiv.append(todoCardGenerator(todo));
}

const projectCardGenerator = (project) => {
    const card = document.createElement('div');
    card.classList.add('project-tab');
    card.dataset.name = project.name;
    const cardHtml = `
                    <span class = "symbol">${project.name[0]}</span>
                    <p class="name">${project.name}</p>
                    <p class="count">${project.todos.length}</p>
                `
    card.innerHTML = cardHtml;
    // console.log(card)
    return card;
}


const todoCardGenerator = (todo) => {
    const todoCard = document.createElement('div');
    todoCard.classList.add('todo-card');
    todoCard.dataset.index = todo.index

    const cardHtml = `
                        <div class="priority ${todo.priority}"></div>
                        <div class="details">
                            <p class="title">${todo.title}</p>
                            <p class="due-date">${todo.dueDate}</p>
                        </div>
                        <button class="toggleDone">✓</button>
                        </div>
                    `
    todoCard.innerHTML = cardHtml;
    return todoCard;
}