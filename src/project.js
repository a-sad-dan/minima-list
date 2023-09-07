export class Project {
    constructor(projectName, tasks) {
        this.projectName = projectName || 'Default Project';
        this.tasksArr = tasks || [];
    }
    updateProjectName(string) {
        if (string) {
            this.projectName = string
            return this.projectName;
        }
        return null //?Invalid input toolTip
    }

    addNewTask() {
        const newTask = new Task();
        this.tasksArr.push(newTask);
    }

    removeTask(string) {
        const index = this.tasksArr.indexOf(string);
        if (index != -1) {
            const removed = this.tasksArr.splice(index, 1)[0];
            return removed;
        }
        return null;
    }

    getProjectName() { return this.projectName };
    getTasks() { return [...this.tasksArr] };
}

