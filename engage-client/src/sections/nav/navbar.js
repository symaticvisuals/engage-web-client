import React from "react";
import { Nav, NavLogo, NavLink, NavMenu } from "./NavbarElements";
export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src="images/engage.png" width="100" alt="engage logo" />
        </NavLogo>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/prize" activeStyle>
            Prizes
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact US
          </NavLink>
          <NavLink to="/tracks" activeStyle>
            Tracks
          </NavLink>
          <NavLink to="/schedule" activeStyle>
            Schedule
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
