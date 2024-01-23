import addIcon from './add-plus.svg'
import closeBtn from './close-circle-outline.svg'
import submitBtn from './checkmark-circle-outline.svg'
import trashIcon from './trash.svg'

import '../../css/task-form.css'

import Modal from '../modal/modal'
import UIcontroller from '../../js/UIController'
import projectManager from '../../js/projectManager'
import todoManager from '../../js/toDoManager'

const TaskForm = (() => {
    const taskForm = document.createElement('form');
    taskForm.className = "task-form";
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
        hideForm();
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
        const priority = taskData.get('color').toLowerCase();
        const description = taskData.get('description');

        //Get active Project and append the new task to the project
        const activeProject = projectManager.getActiveProject();
        todoManager.createNewTodo(activeProject, taskName, description, dueDate, priority)
        event.target.reset();

        // render the new task by forcing re render
        UIcontroller.updateTodo(activeProject);

    }



    const editTodoForm = (todo) => {
        const editForm = document.createElement('form');
        editForm.classList.add('task-form');
        editForm.innerHTML = `
                        <img src="${closeBtn}" alt="" class="close-btn">
                        <img src="${trashIcon}" alt ="delete" class ="delete-btn">
                        <div class="form-row">
                            <label for="taskName" class="hidden"">Task Name</label>
                            <input type="text" id="taskName" name="taskName" placeholder="Task Name" value = "${todo.title}" required>
                        </div>
                        <div class="form-row">
                            <label class="dueDate">Due Date:
                                <input type="date" name="date" id="dueDate" value = "${todo.dueDate}">
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
                            <textarea name="description" id ="description" cols placeholder="Add Description..." resize = "true">${todo.description}</textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <img src="${submitBtn}" alt="submit">
                        </button>`

        //todo add logic to add checked attribute to the correct priority
        editForm.addEventListener('click', function (event) {
            const btn = event.target;
            if (btn.matches('.close-btn')) hideForm();
            if (btn.matches('.delete-btn')) {
                todoManager.deleteTodo(todo);
                // force ui update
                hideForm();
                UIcontroller.updateTodo(projectManager.getActiveProject());
                UIcontroller.updateProjectList();

            };
        });

        editForm.addEventListener('submit', (event) => handleUpdate(event));

        function handleUpdate(event) {
            event.preventDefault();

            let taskData = new FormData(editForm);
            const newTaskName = taskData.get('taskName');
            const newDueDate = taskData.get('date');
            const newPriority = taskData.get('color').toLowerCase();
            const newDescription = taskData.get('description');

            // change todo values
            todo.title = newTaskName;
            todo.dueDate = newDueDate;
            todo.description = newDescription;
            todo.priority = newPriority;

            // reset form --> close form
            event.target.reset();
            Modal.closeModal();

            // force ui re render
            UIcontroller.updateProjectList() //?can remove this???
            UIcontroller.updateTodo(projectManager.getActiveProject());


            event.target.reset();
            Modal.closeModal();

            // force UI re render
            UIcontroller.updateProjectList()
            UIcontroller.updateTodo(projectManager.getActiveProject());

        }
        return editForm;
    }

    const newTask = () => taskForm;
    return { newTask, editTodoForm }
})();

export default TaskForm;