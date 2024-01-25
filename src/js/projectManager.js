// Responsibility: Creates instances of todo items with the specified properties.
import UIcontroller from "./UIController";
import LocStorage from "./localStorage";
import { createProject } from "./projectFactory";


// ! TODO - DECOUPLE FORMS FROM MAKING CHANGES IN OBJECTS DIRECTLY - INSTEAD USE THE MANAGERS

const projectManager = (() => {
    const projects = []
    let activeProject = null;


    const createNewProject = (projectName) => {
        const newProject = createProject(projectName);
        activeProject = newProject;
        projects.push(newProject);
        UIcontroller.updateTodo(activeProject);
        // save changes to local storage
        LocStorage.saveArray();
        return newProject;
    }

    const editProject = (project, newName) => {
        project.name = newName;
        LocStorage.saveArray();
        return project
    }

    const switchProject = (project) => {
        activeProject = project
    };

    const getActiveProject = () => activeProject;

    const deleteProject = (project) => {
        const index = projects.indexOf(project);
        if (index !== -1) {
            projects.splice(index, 1);
            // If the deleted project was the active project, set activeProject to null
            if (activeProject === project) {
                activeProject = null;
            }
        }
        LocStorage.saveArray();
    };

    const viewAllProjects = () => {
        return projects.slice(); // Return a copy of the projects array
    };

    const viewTodosInProject = (project) => {
        return project.todos.slice(); // Return a copy of the todos array within the specified project
    };

    return { createNewProject, editProject, switchProject, getActiveProject, deleteProject, viewAllProjects, viewTodosInProject }
})();


export default projectManager;