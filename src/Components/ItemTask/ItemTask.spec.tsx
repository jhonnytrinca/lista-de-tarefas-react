import ItemTask from "./ItemTask";
import {render, screen, fireEvent} from '@testing-library/react'
// import List from "../List/List";


describe('Item Task', () => {
  const Task = {Id: 1, Description: 'Tarefa1'}
  const DeleteTask = jest.fn()
  const ItemList = [{Id: 1, Description: 'Tarefa2'}, {Id: 2, Description: 'Tarefa2'}]

  test('Botão Remover deve estar visível', () => {
    render(<ItemTask Task={Task} DeleteTask={DeleteTask}/>)
    const RemoveButton = screen.getByRole('button')
    expect(RemoveButton).toBeInTheDocument()
  })

  test('Quando o usuário clica no botão Remover o item é removido', () => {

    render(<ItemTask Task={Task} DeleteTask={DeleteTask}/>)
    fireEvent.click(screen.getByText('Tarefa1'))
    fireEvent.click(screen.getByRole('button'))
    expect(DeleteTask).toHaveBeenCalledWith(1)
    expect(ItemList).not.toContain('Tarefa1')
  })

  // test('Quando o checkbox é marcado o texto fica rasurado', () => {
  //   render(<ItemTask Task={Task} DeleteTask={DeleteTask}/>)
  //   render(<List ItemList={ItemList} DeleteTask={DeleteTask}/>) 
  //   expect(Task.Description).toBe('Tarefa1')
  //   fireEvent.click(screen.getByRole("checkbox"}}))
  //   fireEvent.click(screen.getByRole('checked'))
  // })
})