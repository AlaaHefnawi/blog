import { LuArrowUpRight } from "react-icons/lu"
import "../Card/Card.css"

const Card = ({image, name, date, title, description}) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="info">
        <p>{name}</p>
        <p> • </p>
        <p>{date}</p>
      </div>
      <div className="title">
        <p>{title}</p>
        <LuArrowUpRight />
        </div>
        <p className="description">{description}</p>
    </div>
  )
}

export default Card
