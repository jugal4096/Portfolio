import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiInfo,
  FiBookOpen,
  FiCpu,
  FiCode,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: <FiHome />,
    number: "01",
  },
  {
    name: "About",
    path: "/about",
    icon: <FiInfo />,
    number: "02",
  },
  {
    name: "Education",
    path: "/education",
    icon: <FiBookOpen />,
    number: "03",
  },
  {
    name: "Skills",
    path: "/skills",
    icon: <FiCpu />,
    number: "04",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <FiCode />,
    number: "05",
  },
  {
    name: "Experience",
    path: "/experience",
    icon: <FiBriefcase />,
    number: "06",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FiMail />,
    number: "07",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <NavLink to="/" className="logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>JUGAL</span>
        </NavLink>


        <ul className="nav-links">

          {navItems.map((item) => (
            <li key={item.path}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >

                <span className="nav-icon">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </NavLink>

            </li>
          ))}

        </ul>


        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Navigation menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </nav>


      <div
        className={`drawer-backdrop ${
          open ? "show" : ""
        }`}
        onClick={() => setOpen(false)}
      />


      <aside
        className={`mobile-drawer ${
          open ? "open" : ""
        }`}
      >

        <div className="drawer-header">

          <div>
            <small>PORTFOLIO.OS</small>
            <h2>Navigation</h2>
          </div>

          <button
            className="drawer-close"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>

        </div>


        <div className="drawer-status">
          <span />
          SYSTEM ONLINE
        </div>


        <div className="drawer-links">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
            >

              <span>
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

              <small>
                {item.number}
              </small>

            </NavLink>
          ))}

        </div>


        <div className="drawer-footer">
          &lt;/&gt; JUGAL • AI / ML / MLOps
        </div>

      </aside>
    </>
  );
}