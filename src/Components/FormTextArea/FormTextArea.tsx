import React, {useState} from 'react'

interface FormTextAreaProps {
  AddItem: (Description: string) => void
}

const FormTextArea = ({AddItem}: FormTextAreaProps) => {
  const [NewItem, SetNewItem] = useState('')

  function HandleChange(e: any) {
    SetNewItem(e.target.value)
  }

  function HandleSubmit(e: any) {
    e.preventDefault()
    AddItem(NewItem)
    SetNewItem('')
  }

  return (
    <div>
      <div>
        <h1>Lista de tarefas</h1>
      </div>
      <form onSubmit={HandleSubmit}>
        <div className="TextArea">
          <textarea value={NewItem} onChange={HandleChange} />
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  )
}

export default FormTextArea