// imports
import './style.css'
import './css/project.css'
import './css/todo.css'

import projectManager from './js/projectManager'
import todoManager from './js/toDoManager';
import { createTodo } from './js/toDoFactory';
import { createProject } from './js/projectFactory';
import UIcontroller from './js/UIController';

import './js/localStorage.js'


// check if old data is present

if (LocStorage.arrayExists()) {
    // const activeProject = JSON.parse(LocStorage.getActiveProject());
    LocStorage.populateData();
    // projectManager.setProjectArr(projects);
    // projectManager.switchProject(activeProject);
    // 
    // UIcontroller.updateProjectList();
    // 
}

else {
    const homeProject = projectManager.createNewProject('Home');
    // Set initial project to active
    projectManager.switchProject(homeProject);

    // Add dummy tasks to the project
    todoManager.createNewTodo(homeProject, "Buy Groceries", "1 kg tomatoes, 1kg potato", "29-01-2024", "medium");
    todoManager.createNewTodo(homeProject, "Study for exams", "", "29-01-2024", "high");
    UIcontroller.updateProjectList();
}




// Render the projects based on the UI
// First render the projects div
UIcontroller.updateTodo(projectManager.getActiveProject());


//todo Include the code after this in its own module
const sideBar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const openSidebarBtn = document.getElementById('open-sidebar');


// Close and Open Functionality
closeSidebarBtn.addEventListener('click', () => toggleSideBar(true));
openSidebarBtn.addEventListener('click', () => toggleSideBar(false))
const heading = document.getElementById('heading');

function toggleSideBar(isSideBarOpen) {
    if (isSideBarOpen) {
        sideBar.classList.add('closed');
        heading.classList.add('padded');

    }
    else {
        sideBar.classList.remove('closed');
        heading.classList.remove('padded');
    }
}

function resizeSideBar() {
    if (window.innerWidth < 768) {
        sideBar.classList.add('closed');
    } else {
        sideBar.classList.remove('closed');
    }
}

resizeSideBar();
// for dynamically closing SideBar
window.addEventListener('resize', resizeSideBar);


import TaskForm from './components/old-task-form/task-form.js';

import Modal from './components/modal/modal.js';

const newProjectBtn = document.getElementById('add-project');

newProjectBtn.addEventListener('click', () => {
    Modal.renderModal(ProjectForm.newForm());
})

const newTaskBtn = document.getElementById('add-task')
newTaskBtn.addEventListener('click', () => {
    Modal.renderModal(TaskForm.newTask());
})


import './css/project-form.css'
import ProjectForm from './components/project-form/project-form.js';
import LocStorage from './js/localStorage.js';

