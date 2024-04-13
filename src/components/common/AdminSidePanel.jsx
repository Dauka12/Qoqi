import { ADMIN_PRODUCTS,ADMIN_EVENTS } from "@/constants/routes";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Работы
        </NavLink>
      </div>
      {/* <div className="sidenavigation-item">
        <h4 className="sidenavigation-menu my-0">Пользователи</h4>
      </div> */}
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_EVENTS}
        >
          Мероприятия
        </NavLink>
      </div>
    </div>
  </aside>
);

export default SideNavigation;
