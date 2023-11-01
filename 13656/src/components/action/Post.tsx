import { FC } from "react"
import '../../custom.scss';

interface Posts {
  id: number;
  title: string;
  body: string;
}

export const Post : FC<Posts> = ({ id,title, body }) => {
  return(
      <div key={id} className="post p-3 m-1">
          <div className="text-center pb-3 text-danger text-bold">{title}</div>
          <div>{body}</div>
    </div>
  )
}