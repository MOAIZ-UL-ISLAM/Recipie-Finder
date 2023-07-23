import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <Image
          src="../../../logo.png"
          alt="logo"
          avatar
          style={{ width: 70, height: 70 }}
        />
      </Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="Recipes" as={Link} to="/Recipies" />
    </Menu>
  );
};

export default NavBar;
