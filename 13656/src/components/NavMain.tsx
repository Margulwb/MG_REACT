import { FC } from "react"
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../custom.scss';
import LOGO from '../logo.png'

export const NavMain : FC = () => {
    return(
        <nav className="bg-primary d-flex justify-content-center">
            <Link to="/">
                <img src={LOGO} alt="logo" className="logo"/>
            </Link>
            <Link to="/Blog">
                <div className="item">Blog</div>
            </Link>
            <Link to="/Photos">
                <div className="item">Photos</div>
            </Link>
            <Link to="/Profile">
                <div className="item">Profile</div>
            </Link>
        </nav>
    )
}