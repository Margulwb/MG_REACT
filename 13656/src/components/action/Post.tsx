import { FC, useState, useEffect } from "react"
import '../../custom.scss';
import { Comment } from "./Comment";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  showComments?: boolean;
}
interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Post : FC<Posts> = ({ userId, id, title, body, showComments }) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);

  useEffect(() => { getComment() }, []);

  const getComment = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  };

  const toggleComments = () => {
    setAreCommentsVisible(!areCommentsVisible);
  };

  return(
  <>
      {showComments ? (
      <div key={id} className="post-comment p-3 m-1">
        <div className="text-center pb-3 text-danger text-bold">{title}</div>
        <div>{body}</div>
        <button onClick={toggleComments} className="comment-btn">
          {areCommentsVisible ? "Collapse comments" : "Expand comments"}
        </button>
        {areCommentsVisible && (
          <div>
          {
            comments.filter((comment) => comment.postId === userId).map((comment) => (
                <Comment
                  postId={comment.postId}
                  id={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
            ))
          }
          </div>
        )}
      </div>
      ):(
      <div key={id} className="post p-3 m-1">
        <div className="text-center pb-3 text-danger text-bold">{title}</div>
        <div>{body}</div>
      </div>
      )}
  </>
  )
}