import { FC } from "react"
import '../../custom.scss';

type Albums = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const Album : FC<Albums> = ({ userId, id, title, body }) => {
  return(
      <div key={id} className="p-3 m-1">
          {title}
      </div>
  )
}