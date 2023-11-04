import { FC, useState, useEffect } from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../custom.scss';
import { NavMain } from "../NavMain";
import { Footer } from "../Fotter";
import { Photo } from "../action/Photo";

type photoProps = {
    id: number;
    thumbnailUrl: string;
  };

export const Photos : FC = () => {
    const [photos, setPhotos] = useState<photoProps[]>([]);

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
            <div className="d-flex justify-content-center flex-wrap">
                    {
                        photos.map((photo) => (
                            <Photo id={photo.id} thumbnailUrl={photo.thumbnailUrl} />
                        ))
                    }
            </div>
            <Footer/>
        </>
    )
}