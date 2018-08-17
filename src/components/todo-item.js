import { h } from "hyperapp"

const TodoItem = ({ idx, todo, actions }) => (
  <div class="ToDoItem">
    <p class="ToDoItem-Text">{todo.text}</p>
    <div class="ToDoItem-Delete" onclick={e => actions.remove(idx)}>
      -
    </div>
  </div>
)

export default TodoItem