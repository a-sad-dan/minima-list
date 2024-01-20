import addIcon from './add-plus.svg'
import closeBtn from './close-circle-outline.svg'
import submitBtn from './checkmark-circle-outline.svg'
import trashIcon from './trash-outline.svg'


import '../../css/task-form.css'

import Modal from '../modal/modal'

const TaskForm = (() => {
    const taskForm = document.createElement('form');
    taskForm.id = "task-form";
    // taskForm.classList.add('collapse');
    taskForm.innerHTML = `
                        <img src="${closeBtn}" alt="" class="close-btn">
                        <div class="form-row">
                            <label for="taskName" class="hidden">Task Name</label>
                            <input type="text" id="taskName" name="taskName" placeholder="Task Name" required>
                        </div>
                        <div class="form-row">
                            <label class="dueDate">Due Date:
                                <input type="date" name="date" id="dueDate">
                            </label>
                        </div>
                        <div class="form-row">
                            <label class="color">
                                Color :
                                <label class="container">
                                    <input type="radio" name="color" id="high" value="high">
                                    <span class="red checkmark"></span>
                                </label>
                                <label class="container">
                                    <input type="radio" name="color" id="medium" value="medium">
                                    <span class="yellow checkmark"></span>
                                </label>
                                <label class="container">
                                    <input type="radio" name="color" id="low"  value="low" checked>
                                    <span class="green checkmark"></span>
                                </label>
                            </label>
                        </div>
                        <div class="form-row">
                            <label for = "description" class = "hidden">Description</label>
                            <textarea name="description" id ="description" placeholder="Add Description..." resize = "true"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <img src="${submitBtn}" alt="submit">
                        </button>`


    taskForm.addEventListener('click',
        function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) {
                hideForm();
                Modal.closeModal();
            }
        });

    taskForm.addEventListener('submit', (event) => {
        saveProject(event);
    });


    function hideForm() {
        Modal.closeModal();
    }


    function saveProject(event) {
        event.preventDefault();

        // Collecting Data from the form
        let taskData = new FormData(taskForm);

        const taskName = taskData.get('taskName');
        const dueDate = taskData.get('date');
        const taskPriority = taskData.get('color').toLowerCase();
        const description = taskData.get('description');

        event.target.reset();

        console.log({ taskName, description, dueDate, taskPriority })
    }
    const newTask = () => taskForm;

    return { newTask }
})();

export default TaskForm;