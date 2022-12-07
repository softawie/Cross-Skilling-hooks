import React from "react";
// import { NavLink } from "react-router-dom";
import { navBarStyles } from "../styles";
import { css } from "aphrodite";

const NavBar = () => {
  return (
    <nav className={css(navBarStyles.link)}>
      <div className={css(navBarStyles.link)}>
        {/* <Link className="brand-logo" to="/search">
          Search
        </Link> */}
        {/* <NavLink to="/search"> Search </NavLink>{" "} */}
      </div>
    </nav>
  );
};

export default NavBar;
