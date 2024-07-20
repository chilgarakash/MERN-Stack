import { NavLink } from "react-router-dom";
import Style from "./GlobalNavStyle.module.css"
const GlobalNav =() =>{
    const navLink = [
        {
            id:1,
            to:"/",
            value:"Dashboard"
        },
        {
            id:2,
            to:"/add",
            value:"Add user"
        }
    ]
    return(
        <nav className={Style.container}>{
            navLink.map((link)=>{
                return(
                    <NavLink key={link.id}
                    to={link.to} end
                    className={({ isActive })=>(isActive?Style.active:undefined)}
                >{link.value}</NavLink>
                );
            })
        }
        </nav>
    );
}
export default GlobalNav;