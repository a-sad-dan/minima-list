import closeBtn from '../old-task-form/close-circle-outline.svg'
import submitBtn from '../old-task-form/checkmark-circle-outline.svg'
import UIcontroller from '../../js/UIController';

import Modal from '../modal/modal';

import projectManager from '../../js/projectManager';

import trashIcon from './../../components/old-task-form/trash.svg'

const ProjectForm = (() => {
    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');
    const projectFormHtml =
        `<img src="${closeBtn}" alt="" class="close-btn">
<div class="form-row">
    <label for="project-name" class="hidden">Project Name</label>
    <input type="text" id="project-name" name="project-name" placeholder="Project Name" required>
</div>
<button type="submit" class="submit-btn">
    <img src="${submitBtn}" alt="submit">
</button>`

    projectForm.innerHTML = projectFormHtml;
    projectForm.addEventListener('click', function (event) {
        const btn = event.target;
        if (btn.matches('.close-btn')) {
            hideForm();
        }
    });
    projectForm.addEventListener('submit', (event) => saveProject(event))


    function saveProject(event) {
        event.preventDefault();
        let taskData = new FormData(projectForm);
        const projectName = taskData.get('project-name');
        console.log({ projectName })

        const newProject = projectManager.createNewProject(projectName);

        projectManager.switchProject(newProject);

        UIcontroller.updateProjectList();
        event.target.reset();
        Modal.closeModal();
    }

    function hideForm() {
        Modal.closeModal();
    }

    const newEditForm = (project) => {
        const editForm = document.createElement('form');
        editForm.classList.add('project-form');
        editForm.innerHTML =
            `
                        <img src="${closeBtn}" alt="" class="close-btn">
                        <img src = "${trashIcon}" class = "delete-btn" alt = "delete">
                        <img >
                        <div class="form-row">
                            <label for="project-name" class="hidden">Project Name</label>
                            <input type="text" id="project-name" name="project-name" placeholder="Project Name" required value = "${project.name}">
                        </div>
                        <button type="submit" class="submit-btn">
                        <img src="${submitBtn}" alt="submit">
                        </button>
                        `
        //To listen for form close
        editForm.addEventListener('click', function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) hideForm();
            if (btn.matches('.delete-btn')) {
                projectManager.deleteProject(project);
                // Force UI update
                UIcontroller.updateProjectList();
                UIcontroller.updateTodo(projectManager.getActiveProject());
                Modal.closeModal();
            }
        });

        editForm.addEventListener('submit', (event) => handleUpdate(event));

        function handleUpdate(event) {
            event.preventDefault();

            let taskData = new FormData(editForm);
            const newName = taskData.get('project-name');

            projectManager.editProject(project, newName);
            event.target.reset();
            Modal.closeModal();

            // force UI re render
            UIcontroller.updateProjectList()
            UIcontroller.updateTodo(projectManager.getActiveProject());

        }

        return editForm
    }
    const newForm = () => projectForm;

    return { newForm, newEditForm }
})();


export default ProjectForm;