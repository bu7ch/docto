import { FC, useState } from "react";
import "../layout.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export const Layout: FC<{ children: any }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {user} = useSelector((state:any) => state.user)
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointements",
      path: "/appointements",
      icon: "ri-file-list-3-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-stethoscope-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-account-circle-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-door-open-fill",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/users",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: "ri-capsule-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-account-circle-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-door-open-fill",
    },
  ];
  const menuToDisplay = user?.isAdmin ? adminMenu : userMenu;

  return (
    <div className="main">
      <div className="layout">
        <div className='sidebar'>
          <div className="sidebar-header">
            <h1>SB</h1>
          </div>
          <div className="menu">
            {menuToDisplay.map((menu) => {
              const isActive = location.pathname === menu.path
              return (
                <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            {collapsed ? (
            <i className="ri-close-fill header-action-icon " onClick={() => setCollapsed(false)}></i>
            ):
            <i className="ri-menu-2-fill header-action-icon " onClick={() => setCollapsed(true)}></i>
          }
          <div className="notif">
            <i className="ri-notification-line header-action-icon"></i>
            <Link to="/profile">{user?.name}</Link>
          </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};
