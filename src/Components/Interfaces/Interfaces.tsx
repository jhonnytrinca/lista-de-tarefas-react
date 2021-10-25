export interface TaskProps {
  Id: number,
  Description: string,
  Done: boolean
}

export interface Props {
  Task: TaskProps
  DeleteTask(TaskToDelete: number): void
}

export interface InputContainerProps {
  AddItem: (Description: string) => void
}
