import { h } from "hyperapp"
import TodoItem from "./todo-item"

const TodoList = ({ todos }) => (_state, actions) => (
  <div class="ToDo-Content">
    {todos.map((todo, idx) => (
      <TodoItem idx={idx} todo={todo} />
    ))}
  </div>
)

export default TodoList
