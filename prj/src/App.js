import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as AddIcon } from "./icons/add-circle.svg";
import { ReactComponent as ChatIcon } from "./icons/chatbubble.svg";
import { ReactComponent as NotificationsIcon } from "./icons/notifications.svg";
import { ReactComponent as CaretDownIcon } from "./icons/caret-down.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron-forward.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings.svg";

import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <NavBar>
      <NavItem icon={<AddIcon />} />
      <NavItem icon={<NotificationsIcon />} />
      <NavItem icon={<ChatIcon />} />
      <NavItem icon={<CaretDownIcon />}>
        <DropdownMenu />
      </NavItem>
    </NavBar>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); //setting, animals
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition
        classNames="menu-primary"
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        classNames="menu-secondary"
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
