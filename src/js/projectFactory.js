// Responsibility: Creates instances of project objects.

const createProject = (name = 'default') => {
    const project = {
        // props
        name: name,
        todos: [],

        //methods
        addTodo: function (todo) {
            this.todos.push(todo)
        },
        removeTodo: function (todo) {
            const index = this.todos.indexOf(todo)
            if (index !== -1) { this.todos.splice(index, 1) }
        }

    }
    return project
}

export { createProject }