import { useState } from "react"
import { Props } from "../Interfaces/Interfaces"

const ItemTask = ({Task, DeleteTask}: Props) => {
  const [Checked, SetChecked] = useState(Task.Done)
  
  const IsChecked = (e: any) => {
    SetChecked(e.target.checked)
    e.target.style={textDecorationLine: 'line-through'}
  }


  return (
    <div className="Items">
      <input type="checkbox" checked={Checked} onChange={IsChecked}/>
        <span className="Tasks">{Task.Description}</span>
      <button onClick={() => {DeleteTask(Task.Id)}}>Remover da lista</button>
    </div>
  )
}

export default ItemTask