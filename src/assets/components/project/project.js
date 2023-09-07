import addIcon from '../../icons/addCircled.svg';
import checkIcon from '../../icons/checkMark.svg';
import crossIcon from '../../icons/crossMark.svg';

export default function createProject(name, icon) {
    const project = document.createElement('div');
    project.classList.add('project');
    const projectIcon = document.createElement('img');
    projectIcon.classList.add('icon');
    projectIcon.src = icon;


    const projectName = document.createElement('p');
    projectName.classList.add('name');
    projectName.textContent = name;

    const taskCount = document.createElement('p');
    taskCount.classList.add('count');
    taskCount.textContent = '2'; //Change this default value

    const addTaskBtn = document.createElement('img');
    addTaskBtn.src = addIcon;
    addTaskBtn.classList.add('add-icon');


    // These are for editing only and are hidden for now
    const crossBtn = document.createElement('img');
    crossBtn.src = crossIcon;
    crossBtn.classList.add('cross', 'btn', 'hidden');

    const checkBtn = document.createElement('img');
    checkBtn.src = checkIcon;
    crossBtn.classList.add('check', 'btn', 'hidden');

    project.appendChild(projectIcon);
    project.appendChild(projectName);
    project.appendChild(taskCount);
    project.appendChild(addTaskBtn);

    return project;
}

export function createNewProjectBtn() {
    const btn = document.createElement('button');
    btn.id = 'addProject';
    btn.classList.add('project')

    const name = document.createElement('p');
    name.textContent = 'New Project';
    name.classList.add('name')

    const icon = document.createElement('img');
    icon.src = addIcon;

    btn.appendChild(name);
    btn.appendChild(icon);
    return btn;
}