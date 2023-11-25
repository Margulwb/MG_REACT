import { FC } from "react"
import '../../custom.scss';

interface TodoProps{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todos : FC<TodoProps> = ({ userId, id, title, completed }) => {

  return(
  <>
    {completed ? (
      <div key={id} className="post p-3 m-1">
        <div className="text-center pb-3 text-danger text-bold">{title}</div>
        
      </div>
    ) : (
      <div key={id} className="post bg-primary  p-3 m-1">
        <div className="text-center pb-3 text-danger text-bold">{title}</div>
        
      </div>
    )}
  </>
  )
}