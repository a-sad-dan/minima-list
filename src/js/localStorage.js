// Code for local storage

import projectManager from "./projectManager";
import todoManager from "./toDoManager";

const LocStorage = (() => {
    //Checking for local storage
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    //Using local storage
    if (storageAvailable("localStorage")) {
        console.log('local storage is available');
    }
    else {
        throw ("local storage not available");

    }

    const saveArray = () => {
        const projectsArr = JSON.stringify(projectManager.viewAllProjects());
        localStorage.setItem('projectsArr', projectsArr);
    }
    const populateData = () => {
        const arr = JSON.parse(localStorage.getItem('projectsArr'));
        arr.forEach((project) => {
            const newProject = projectManager.createNewProject(project.name);
            console.log(newProject);
            const todos = project.todos;
            console.log(todos);
            todos.forEach((todo) => {
                const newTodo = todoManager.createNewTodo(newProject, todo.title, todo.description, todo.dueDate, todo.priority, todo.isDone);
                console.log(newTodo);
            })
        })
        console.log(arr);
    }

    const saveActiveProject = (project) => localStorage.setItem('activeProject', JSON.stringify(project));

    const getActiveProject = () => localStorage.getItem('activeProject');

    const arrayExists = () => localStorage.getItem("projectsArr") !== null;

    const clearArray = () => localStorage.removeItem("projectsArr");


    return { saveArray, populateData, arrayExists, clearArray, saveActiveProject, getActiveProject };
})();


import { createTodo } from "./toDoFactory";

// to add the methods back


export default LocStorage;