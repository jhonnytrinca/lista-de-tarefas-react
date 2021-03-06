import {useState, ChangeEvent} from 'react';
import './App.css';
import InputContainer from './Components/InputContainer/InputContainer';
import {TaskProps} from './Components/Interfaces/Interfaces'
import List from './Components/List/List';

function App() {
  const [ItemList, SetItemList] = useState<TaskProps[]>([])
  const [Task, SetTask] = useState<string>("") 

  const HandleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    SetTask(e.target.value)
  }

  const HandleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    AddItem(Task)
    SetTask('')
  }

  function AddItem(Value: string) {
    const NewTask = {Id: ItemList.length + 1 , Description: Value}
    SetItemList([...ItemList, NewTask])
  }
  
  const DeleteTask = (TaskToDelete: number): void => {
    SetItemList(ItemList.filter((Task) => {
      return Task.Id !== TaskToDelete
    }))
  }

  return(
    <div>
      <InputContainer AddItem={AddItem} HandleChange={HandleChange} HandleSubmit={HandleSubmit} Value={Task} />
      <List ItemList={ItemList} DeleteTask={DeleteTask}/>
    </div>
  )
}

export default App;