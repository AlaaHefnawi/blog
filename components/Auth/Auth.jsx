import { Link, useNavigate } from "react-router"
import "./Auth.css"

const Auth = ({title, subtitle, inputs, btn, text, link}) => {
    const navigate = useNavigate()
  return (
    <div className="auth">
      <div className="heading">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <form>
        {inputs?.map((input, index) => {
        return(
            <input key= {index} type={input?.type} placeholder={input?.placeholder} required={input?.required}/>
        )
      })}
        <button type="submit" onClick={() => navigate(btn?.url)}>{btn?.content}</button>
      </form>
      <p className="account">{text}<Link to={link?.url}>{link?.content}</Link></p>
    </div>
  )
}

export default Auth
