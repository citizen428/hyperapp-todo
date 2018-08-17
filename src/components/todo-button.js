import { h } from "hyperapp"

const TodoButton = ({ actions }) => (
  <div class="ToDo-Add" onclick={e => actions.add()}>
    +
  </div>
)

export default TodoButton
