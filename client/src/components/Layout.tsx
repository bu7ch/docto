import { FC } from "react";
import "../layout.css";
import { Link, useLocation } from "react-router-dom";
export const Layout: FC<{ children: any }> = ({ children }) => {
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
  const menuToDisplay = userMenu;

  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>something</h1>
          </div>
          <div className="menu">
            {menuToDisplay.map((menu) => {
              const isActive = location.pathname === menu.path
              return (
                <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};
