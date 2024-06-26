import { useState } from "react";
import imgLogo from "../assets/img/It live logO.png";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState("Uskunalar");

  const path = useLocation();
  
  const nav = [
    {
      id: 0,
      name: "Foydalanauvchilar",
      isHaveSubnav: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          size="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user"
        >
          <path d="M20.24 18.24a9 9 0 1 0-16.48 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      path: "/students",
    },
    {
      id: 1,
      name: "Uskunalar",
      isHaveSubnav: false,
      icon: (
        <svg
          data-feather="briefcase"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-monitor"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      path: "/",
    },
    {
      id: 2,
      name: "Kategoriyalar",
      isHaveSubnav: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-briefcase"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      path: "/Catigorytest_Index",
    },
    {
      id: 3,
      name: "Fanlar",
      isHaveSubnav: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-book"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      path: "/Courses_index",
    },
    {
      id: 4,
      name: "Testlar",
      isHaveSubnav: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-user"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      path: "/Question_Index",
    },
    {
      id: 5,
      name: "Rasmli Testlar",
      isHaveSubnav: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-image"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      path: "/Questionimg_Index",
    },
    {
      id: 6,
      name: "Natijalar",
      isHaveSubnav: true,
      icon: (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        size="24"
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="feather feather-check-circle"
      >
        <path d="M9 11l3 3L22 4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      ),
      path: "/result",
    },
    {
      id: 7,
      name: "Xabarlar",
      isHaveSubnav: true,
      icon: (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        size="24"
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="feather feather-message-circle"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4 8.5 8.5 0 0 1-12.8 0 8.38 8.38 0 0 1-1.9-5.4 8.38 8.38 0 0 1 1.9-5.4 8.5 8.5 0 0 1 12.8 0 8.38 8.38 0 0 1 1.9 5.4z" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="16" y2="15" />
        <line x1="12" y1="7" x2="12" y2="11" />
      </svg>
      ),
      path: "/contact",
    }
  ];
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html">
            <img alt="image" src={imgLogo} className="header-logo" /> <br />
            <span className="logo-name">IQ Test admin</span>
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Asosiy</li>

          {/*  */}
          {nav.map((nav, index) => {
            return (
              <li className={path.pathname == nav.path ? "active" : ""}>
                <Link to={nav.path} className="nav-link">
                  {nav.icon}
                  <span>{nav.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
