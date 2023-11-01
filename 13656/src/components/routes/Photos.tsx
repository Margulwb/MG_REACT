import { FC } from "react"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../custom.scss';
import { NavMain } from "../NavMain";

export const Photos : FC = () => {
    return(
        <>
            <NavMain/>
            <div className="p-3 mb-2 bg-secondary text-white">phottos</div>
        </>
    )
}