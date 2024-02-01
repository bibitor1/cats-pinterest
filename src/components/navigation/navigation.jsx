import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/" activeClassName="navigation__link--active" className="navigation__link">Все котики</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeClassName="navigation__link--active" className="navigation__link">Любимые котики</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
