import { FC } from "react"
import '../layout.css'
import { Link } from "react-router-dom"
export const Layout:FC<{children:any}> = ({children})=> {
const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "",
  },
  {
    name: "Appointements",
    path: "/appointements",
    icon: "",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "",
  },
  {
    name: "Logout",
    path: "/logout",
    icon: "",
  },
  
]
const menuToDisplay = userMenu

  return (
    <div  className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>something</h1>
          </div>
          <div className="menu">
            {menuToDisplay.map((menu) =>{
              return(
                <div className="d-flex">
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  )
}

