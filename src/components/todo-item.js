import { h } from "hyperapp"

const TodoItem = ({ idx, todo }) => (_state, actions) => (
  <div class="ToDoItem" key={todo.id}>
    <p class="ToDoItem-Text">{todo.text}</p>
    <div class="ToDoItem-Delete" onclick={e => actions.remove(idx)}>
      -
    </div>
  </div>
)

export default TodoItem
