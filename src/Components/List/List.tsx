import ItemTask from "../ItemTask/ItemTask"
import { TaskProps, ListProps } from "../Interfaces/Interfaces"

const List = ({ItemList, DeleteTask}: ListProps) => {
  return(
    <div className="List">
    {ItemList.map((Task: TaskProps, Id: number) => 
      <ItemTask key={Id} Task={Task} DeleteTask={DeleteTask}/>)}
    </div>
  )
}

export default List