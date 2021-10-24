export interface TaskProps {
  Description: string
}

export interface Props {
  Task: TaskProps
  DeleteTask(TaskToDelete: string): void
}

export interface InputContainerProps {
  AddItem: (Description: string) => void
}
