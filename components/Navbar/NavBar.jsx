import { NavLink, useNavigate } from "react-router"
import "../Navbar/NavBar.css"

const NavBar = ({logo , items, btn}) => {
  const navigate = useNavigate();

return (
    <nav>
    <div className="navLeft">
        <h1>{logo}</h1>
        <ul>
            {items?.map((item, index) => {
                return(
                    <li key= {index}>
                        <NavLink
                        to={item?.url}
                        className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                        {item?.content}
                        </NavLink>
                    </li>
                )
            }
            )}
        </ul>
    </div>
    <button onClick={() => navigate(btn?.url)}>{btn?.content}</button>
    </nav>
)
}

export default NavBar
