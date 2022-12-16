import React from "react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Current Run", link: "/" },
  { name: "Algorithm", link: "/algorithm" },
  { name: "Alarams", link: "/alarams" },
];

function SideBar() {
  return (
    <nav
      class="side-nav rounded-2xl "
      style={{ backgroundColor: "#1A3175", borderRadius: "1.3rem" }}
    >
      <ul>
        {menus.map((item) => {
          return (
            <li>
              <Link to={item.link} class="side-menu">
                <div class="side-menu__icon">
                  {" "}
                  <i data-feather="inbox"></i>{" "}
                </div>
                <div class="side-menu__title"> {item.name} </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
