import { FC, useState, useEffect } from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../custom.scss';
import { NavMain } from "../NavMain";
import { Footer } from "../Fotter";
import { LoginPage } from "../login/LoginPage";
import User from "../login/User";

interface ProfilesProps {
    users: string[];
  }

export const Profiles : FC<ProfilesProps> = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data: User[]) => {
          setUsers(data);
        })
        .catch((error) => console.error(error));
    }, []);

    return(
        <>
            <NavMain/>
            <LoginPage users={users} />
            <Footer/>
        </>
    )
}