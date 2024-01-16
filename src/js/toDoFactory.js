// Responsibility: Creates instances of project objects.

const createTodo = (title = '', dueDate = null, description = '', priority = 'low', isDone = 'false') => {
    const todo = {
        // props
        title: title,
        dueDate: dueDate,
        description: description,
        priority: priority,
        isDone: isDone,

        // methods //! instead of singleChanges -> update todo changes all
        changeTitle: function (newTitle) {
            this.title = newTitle;
        },
        changeDueDate: function (newDueDate) {
            this.dueDate = newDueDate;
        },
        toggleStatus: function () { isDone = !isDone },
        changePriority: function (newPriority) { this.priority = newPriority }
    };

    return todo;
}

export { createTodo }