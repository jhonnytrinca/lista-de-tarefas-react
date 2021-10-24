import React, {useState} from 'react';
import './App.css';
import InputContainer from './Components/InputContainer/InputContainer';
import {TaskProps} from './Components/Interfaces/Interfaces'
import ItemTask from './Components/ItemTask/ItemTask'

function App() {
  const [ItemList, SetItemList] = useState<TaskProps[]>([])

  function AddItem(Task: string) {
    const NewTask = {Description: Task}
    SetItemList([...ItemList, NewTask])
  }
  
  const DeleteTask = (TaskToDelete: string): void => {
    SetItemList(ItemList.filter((Task) => {
      return Task.Description !== TaskToDelete
    }))
  }

  return(
    <div>
      <InputContainer AddItem={AddItem}/>
      <div className="List">
        {ItemList.map((Task: TaskProps, key: number) => 
          <ItemTask key={key} Task={Task} DeleteTask={DeleteTask}/>)}
      </div>
    </div>
  )
}

export default App;