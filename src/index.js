import { h, app } from "hyperapp"
import TodoButton from "./components/todo-button"
import TodoInput from "./components/todo-input"
import TodoList from "./components/todo-list"
import logo from "./images/favicon.png"

const state = {
  todos: [{ id: 1, text: "clean the house" }, { id: 2, text: "buy milk" }],
  todoText: "",
  nextId: 3
}

const actions = {
  add: () => state => {
    if (!state.todoText) return

    return {
      todoText: "",
      todos: [...state.todos, { id: state.nextId, text: state.todoText }],
      nextId: state.nextId + 1
    }
  },
  updateText: text => state => ({ todoText: text }),
  remove: idx => state => ({
    todos: state.todos.filter((el, i) => i !== idx)
  })
}

const view = (state, actions) => (
  <div class="ToDo">
    <img class="Logo" src={logo} alt="HyperApp logo" />
    <h1 class="ToDo-Header">HyperApp To Do</h1>
    <div class="ToDo-Container">
      <TodoList todos={state.todos} />
      <TodoInput text={state.todoText} />
      <TodoButton />
    </div>
  </div>
)

const main = app(state, actions, view, document.getElementById("app"))
