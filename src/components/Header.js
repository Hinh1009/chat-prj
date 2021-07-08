import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeOutlined from "@material-ui/icons/AccessTimeOutlined";
import { HelpOutlineOutlined, SearchOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvinder";

function Header() {
  const [{user}] = useStateValue()
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeOutlined />
      </div>
      <div className="header__search">
          <SearchOutlined />
        <input placeholder="Search here"/>
      </div>
      <div className="header__right">
          <HelpOutlineOutlined />
          </div>
    </div>
  );
}

export default Header;
