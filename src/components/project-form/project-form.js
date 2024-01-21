import closeBtn from '../old-task-form/close-circle-outline.svg'
import submitBtn from '../old-task-form/checkmark-circle-outline.svg'
import UIcontroller from '../../js/UIController';

import Modal from '../modal/modal';

import projectManager from '../../js/projectManager';


const ProjectForm = (() => {
    const projectForm = document.createElement('form');
    projectForm.id = 'project-form'
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

        console.log(projectManager.viewAllProjects());
        UIcontroller.updateProjectList();
        console.log('active project', projectManager.getActiveProject())
        event.target.reset();
        Modal.closeModal();
    }

    function hideForm() {
        Modal.closeModal();
    }

    const newForm = () => projectForm;
    return { newForm }
})();


export default ProjectForm;