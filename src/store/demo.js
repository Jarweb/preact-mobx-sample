import { observable, action, computed } from "mobx"

class Store {
    @observable token = ''
    @observable todos = []

    @action setToken(token) {
        this.token = token
    }

    @action setTodos(todos) {
        this.todos = this.todos.concat(todos)
    }

    @computed get todosLen() {
        return this.todos.length
    }

    fetchTodos = () => {
        setTimeout(() => {
            this.setTodos([1,2,3])
        }, 100)
    }
}

export default new Store()