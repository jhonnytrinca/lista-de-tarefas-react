import { Props } from "../Interfaces/Interfaces"

const ItemTask = ({Task, DeleteTask}: Props) => {
  return (
    <div className="Items">
      <input type="checkbox" />
        <span className="Tasks">{Task.Description}</span>
      <button onClick={() => {DeleteTask(Task.Id)}}>Remover da lista</button>
    </div>
  )
}

export default ItemTask