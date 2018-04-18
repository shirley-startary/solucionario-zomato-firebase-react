import React from "react";
import { Link } from "react-router-dom";
import UserLogIn from "./menu/UserLogIn";
import UserNotLogIn from "./menu/UserNotLogIn";

class NavBar extends React.Component {
  render() {
    let ComponentToShow = this.props.logInStatus ? (
      <UserLogIn logOut={this.props.logOut} />
    ) : (
      <UserNotLogIn logIn={this.props.logIn} />
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {ComponentToShow}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
