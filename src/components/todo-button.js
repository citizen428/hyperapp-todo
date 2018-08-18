import { h } from "hyperapp"

const TodoButton = () => (_state, actions) => (
  <div class="ToDo-Add" onclick={_e => actions.add()}>
    +
  </div>
)

export default TodoButton
