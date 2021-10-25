import {useState} from 'react';
import './App.css';
import InputContainer from './Components/InputContainer/InputContainer';
import {TaskProps} from './Components/Interfaces/Interfaces'
import ItemTask from './Components/ItemTask/ItemTask'

function App() {
  const [ItemList, SetItemList] = useState<TaskProps[]>([])

  function AddItem(Task: string) {
    const NewTask = {Id: ItemList.length + 1 , Description: Task, Done: false}
    SetItemList([...ItemList, NewTask])
  }
  
  const DeleteTask = (TaskToDelete: number): void => {
    SetItemList(ItemList.filter((Task) => {
      return Task.Id !== TaskToDelete
    }))
  }

  return(
    <div>
      <InputContainer AddItem={AddItem}/>
      <div className="List">
        {ItemList.map((Task: TaskProps, Id: number) => 
          <ItemTask key={Id} Task={Task} DeleteTask={DeleteTask}/>)}
      </div>
    </div>
  )
}

export default App;