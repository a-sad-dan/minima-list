// Responsibility: Creates instances of todo items with the specified properties.
import { createProject } from "./projectFactory";


const projectManager = (() => {
    const projects = []
    let activeProject = null;


    const createNewProject = (projectName) => {
        const newProject = createProject(projectName);
        projects.push(newProject);
        return newProject;
    }

    const switchProject = (project) => {
        activeProject = project
    };

    const deleteProject = (project) => {
        const index = projects.indexOf(project);
        if (index !== -1) {
            projects.splice(index, 1);
            // If the deleted project was the active project, set activeProject to null
            if (activeProject === project) {
                activeProject = null;
            }
        }
    };

    const viewAllProjects = () => {
        return projects.slice(); // Return a copy of the projects array
    };

    const viewTodosInProject = (project) => {
        return project.todos.slice(); // Return a copy of the todos array within the specified project
    };

    return { createNewProject, switchProject, deleteProject, viewAllProjects, viewTodosInProject }
})();


export default projectManager;