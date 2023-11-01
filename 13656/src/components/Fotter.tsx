import { FC } from "react"

export const Footer : FC = () => {
    return(
        <footer className="bg-secondary d-flex justify-content-center fixed-bottom">
            <h1 className="h3 text-end m-3">Author:</h1>
            <h1 className="h4 text-end m-3">Maciej Jan Karol Gurgul 13656</h1>
            <h1 className="h4 text-end m-3">lab2/3/PROGN</h1>
        </footer>
    )
}