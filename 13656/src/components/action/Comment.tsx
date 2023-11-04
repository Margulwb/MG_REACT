import { FC } from "react"
import '../../custom.scss';

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Comment : FC<Comments> = ({ postId, id, name, email, body }) => {
  return(
  <>
      <div key={id} className="comment p-3">
        <div className="pb-3">{name} - {email}</div>
        <div>{body}</div>
      </div>
  </>
  )
}