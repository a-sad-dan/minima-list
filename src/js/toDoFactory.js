// Responsibility: Creates instances of project objects.

const createTodo = (title = '', description = '', dueDate = null, priority = 'low', isDone = 'false') => {
    const todo = {
        // props
        title: title,
        dueDate: dueDate,
        description: description,
        priority: priority,
        isDone: isDone,

        // methods
        updateTodo: function (newTitle, newDescription, newDueDate, newPriority) {
            this.title = newTitle;
            this.description = newDescription;
            this.dueDate = newDueDate;
            this.priority = newPriority;
        },

        toggleStatus: function () { this.isDone = !this.isDone },
    };

    return todo;
}

export { createTodo }