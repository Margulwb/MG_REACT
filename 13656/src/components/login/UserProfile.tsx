import { FC, useState, useEffect } from "react";
import User from "./User";
import { Post } from "../action/Post";

interface UserProfileProps {
  user: User;
}

type postsProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
    const [posts, setPosts] = useState<postsProps[]>([]);

    useEffect(() => { getPosts() }, []);

    const getPosts = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.log(error));
    };

  return (
    <div className="d-flex">
        <div className="user-data position-fixed">
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
        </div>

        <div className="d-flex justify-content-center flex-wrap">
        {
            posts.filter((post) => user.id === post.userId).map((post) => (
                <Post userId={post.userId} id={post.id} title={post.title} body={post.body} showComments={true}/>
            ))
        }
        </div>
    </div>
  );
};
