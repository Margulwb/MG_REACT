import { FC, useState, useEffect } from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../custom.scss';
import { NavMain } from "../NavMain";
import { Post } from '../action/Post'

type postsProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

export const Blog : FC = () => {
    const [posts, setPosts] = useState<postsProps[]>([]);

    useEffect(() => { getPosts() }, []);

    const getPosts = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.log(error));
    };

    return(
        <>
            <NavMain/>
            <main className="d-flex justify-content-center flex-wrap">
            {
                posts.map((post) => (
                    <Post userId={post.userId} id={post.id} title={post.title} body={post.body}/>
                ))
            }
            </main>
        </>
    )
}