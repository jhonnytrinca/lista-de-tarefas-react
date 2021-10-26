import { ChangeEvent } from "react";

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
  Task?: string
  AddItem?: (Description: string) => void
  HandleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  HandleSubmit?: (e: ChangeEvent<HTMLFormElement>) => void  
}
