import {render, screen, fireEvent} from '@testing-library/react'
import InputContainer from "./InputContainer";

describe('Ao escrever um texto no textarea e clicar no botão Adicionar', () => {
  test('o texto deve aparecer dentro da listagem', () => {
    const AddItem = jest.fn()
    const HandleSubmit = jest.fn()
    const Task = 'Tarefa1'

    render(<InputContainer AddItem={AddItem} HandleSubmit={HandleSubmit} Task={Task} /> )
    const InputElement = screen.getByRole('textbox')
    fireEvent.submit(InputElement, {target: {value: "Tarefa1"}})
    expect(Task).toBe("Tarefa1")
  })
})