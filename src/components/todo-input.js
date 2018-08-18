import { h } from "hyperapp"

const TodoInput = ({ text }) => (_state, actions) => (
  <input
    type="text"
    oncreate={e => e.focus()}
    onkeyup={e => {
      e.keyCode === 13 ? actions.add() : actions.updateText(e.target.value)
    }}
    value={text}
  />
)

export default TodoInput
