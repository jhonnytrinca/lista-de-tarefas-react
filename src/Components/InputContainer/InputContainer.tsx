import { useState } from "react"

interface InputContainerProps {
  AddItem: (Description: string) => void
}

const InputContainer = ({AddItem}: InputContainerProps) => {
  const [Task, SetTask] = useState<string>("") 

  const HandleChange = (e: any): void => {
    SetTask(e.target.value)
  }

  const HandleSubmit = (e: any): void => {
    e.preventDefault()
    AddItem(Task)
    SetTask('')
  }

  return(
    <div className="Header">
      <form onSubmit={HandleSubmit}>
      <div className="InputContainer">
        <textarea onChange={HandleChange} value={Task} placeholder="Insira a tarefa"/>
        <button type="submit">Adicionar</button>
      </div>
      </form>
    </div>
  )
}

export default InputContainer