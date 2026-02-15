import { useNavigate } from "react-router";
import "../Hero/Hero.css"

const Hero = ({title, subtitle, btn}) => {
  const navigate = useNavigate();
  return (
    <div className="hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button onClick={() => navigate(btn?.url)}>{btn?.content}</button>
        </div>
    </div>
  )
}

export default Hero
