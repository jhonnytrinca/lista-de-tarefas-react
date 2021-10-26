import {InputContainerProps} from '../Interfaces/Interfaces'

const InputContainer = ({HandleChange, HandleSubmit, Task}: InputContainerProps) => {
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