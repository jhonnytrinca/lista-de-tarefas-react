import { ChangeEvent } from "react";

export interface TaskProps {
  Id: number,
  Description: string,
}

export interface Props {
  Task: TaskProps
  DeleteTask(TaskToDelete: number): void
}

export interface InputContainerProps {
  Value: string
  AddItem?: (Description: string) => void
  HandleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  HandleSubmit?: (e: ChangeEvent<HTMLFormElement>) => void  
}

export interface ListProps {
  ItemList: TaskProps[]
  DeleteTask: (TaskToDelete: number) => void
}
