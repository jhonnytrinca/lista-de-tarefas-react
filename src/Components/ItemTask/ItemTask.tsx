import { Props } from "../Interfaces/Interfaces"

const ItemTask = ({Task, DeleteTask}: Props) => {
  return (
    <div>
      <input type="checkbox"/>
      {Task.Description}
      <button onClick={() => {DeleteTask(Task.Description)}}>Remover</button>
    </div>
  )
}

export default ItemTask