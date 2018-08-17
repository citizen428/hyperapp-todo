import { h } from "hyperapp"
import TodoItem from "./todo-item"

const TodoList = ({ todos, actions }) => (
  <div class="ToDo-Content">
    {todos.map((todo, idx) => (
      <TodoItem idx={idx} todo={todo} actions={actions} />
    ))}
  </div>
)

export default TodoList
