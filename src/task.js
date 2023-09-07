class Task {
    constructor(taskName, taskDueDate, taskPriority, taskStatus, subTasks) {
        this.taskName = taskName || 'Default Task';
        const today = new Date();
        this.taskDueDate = taskDueDate || `${today.getDate()}-${today.getMonth()}`;
        this.taskPriority = taskPriority || 0;
        this.taskStatus = taskStatus || false; //?default of false
        this.subTasksArr = [];
    }
    updateTaskName(string) {
        if (string && typeof string === 'string') {
            this.taskName = string;
            return this.taskName;
        }
        return null //? Invalid input ToolTip
    }
    updateDueDate(string) {
        if (string) {
            this.taskDueDate = string;
            return this.taskDueDate;
        }
        return null;
    }
    updateTaskPriority(num) {
        if (num == 1 || num == 2 || num == 3) {
            this.taskPriority = num;
            return this.taskPriority;
        }
        return null //? ToolTip
    }
    toggleTaskStatus() {
        this.taskStatus = !this.taskStatus;
        return this.taskStatus;
    }

    addSubTask() {
        const newSubTask = new Subtask();
        this.subTasksArr.push(newSubTask);
    }
    removeSubTask(subTask) {
        const index = this.subTasksArr.indexOf(subTask);
        if (index != -1) {
            const removed = this.subTasksArr.splice(index, 1)[0];
            return removed;
        }
        return 'subTask not found';
    }
    getTaskName() { return this.taskName }
    getTaskDueDate() { return this.taskDueDate };
    getTaskPriority() { return this.taskPriority };
    getTaskStatus() { return this.taskStatus };

    getSubTasks() { return [...this.subTasksArr] }

}

class Subtask {
    constructor(subTaskName, subTaskStatus) {
        this.subTaskName = subTaskName || 'Default Subtask';
        this.subTaskStatus = subTaskStatus || false; //?default of false
    }
    updateSubTaskName(string) {
        if (string) {
            this.subTaskName = string;
            return this.subTaskName;
        }
        return null; //?Invalid input
    }
    toggleSubTaskStatus() {
        this.subTaskStatus = !this.subTaskStatus;
        return this.subTaskStatus;
    }
    getSubTaskName() { return this.subTaskName }
    getSubTaskStatus() { return this.subTaskStatus }
}

export { Task, Subtask }