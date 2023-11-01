import { FC, useEffect, useState } from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../custom.scss';
import { NavMain } from "../NavMain";
import { Footer } from "../Fotter";
import { Post } from '../action/Post'
import { Photo } from "../action/Photos";

type postsProps = {
    id: number;
    title: string;
    body: string;
  };

type photoProps = {
    id: number;
    thumbnailUrl: string;
  };

export const Home : FC = () => {
    const [posts, setPosts] = useState<postsProps[]>([]);
    const [photos, setPhotos] = useState<photoProps[]>([]);

    useEffect(() => { getPosts() }, []);

    const getPosts = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.log(error));
    };

    useEffect(() => { getImage() }, []);

    const getImage = async () => {
        await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.log(error));
    };

    return(
        <>
            <NavMain/>
            <main >
                <h1 className="h1 text-center">Welcome!</h1>
                <h1 className="h5 text-center">Amazing page</h1>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        posts.slice(0, 2).map((post) => (
                            <Post id={post.id} title={post.title} body={post.body}/>
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        photos.slice(0, 1).map((photo) => (
                            <Photo id={photo.id} thumbnailUrl={photo.thumbnailUrl} />
                        ))
                    }
                </div>
            </main>
            <Footer/>
        </>
    )
}