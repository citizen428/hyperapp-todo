import { h } from "hyperapp"

const TodoInput = ({ text, actions }) => (
  <input
    type="text"
    onkeyup={e => {
      e.keyCode === 13 ? actions.add() : actions.updateText(e.target.value)
    }}
    value={text}
  />
)

export default TodoInput
