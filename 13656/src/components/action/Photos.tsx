import { FC } from "react"
import '../../custom.scss';

type Photos = {
  id: number;
  thumbnailUrl: string;
};

export const Photo : FC<Photos> = ({ id, thumbnailUrl }) => {
  return(
      <div key={id} className="Photo p-3 m-1">
          <img src={thumbnailUrl} alt="" />
    </div>
  )
}