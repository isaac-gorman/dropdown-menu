import React from "react";
import { ReactComponent as AddIcon } from "./icons/add-circle.svg";
import { ReactComponent as ChatIcon } from "./icons/chatbubble.svg";
import { ReactComponent as NotificationsIcon } from "./icons/notifications.svg";

function App() {
  return (
    <NavBar>
      <NavItem icon={<AddIcon />} />
      <NavItem icon={<NotificationsIcon />} />
      <NavItem icon={<ChatIcon />} />
    </NavBar>
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
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
