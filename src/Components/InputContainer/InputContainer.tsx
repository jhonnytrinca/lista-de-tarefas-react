import { useState, ChangeEvent } from "react"

interface InputContainerProps {
  AddItem: (Description: string) => void
}

const InputContainer = ({AddItem}: InputContainerProps) => {
  const [Task, SetTask] = useState<string>("") 

  const HandleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    SetTask(e.target.value)
  }

  const HandleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    AddItem(Task)
    SetTask('')
  }

  return(
    <div className="Header">
      <div>
        <h1> Lista de tarefas </h1>
      </div>
      <form onSubmit={HandleSubmit}>
      <div className="InputContainer">
        <textarea onChange={HandleChange} value={Task} placeholder="Insira sua tarefa"/>
        <button type="submit">Adicionar</button>
      </div>
      </form>
    </div>
  )
}

export default InputContainer