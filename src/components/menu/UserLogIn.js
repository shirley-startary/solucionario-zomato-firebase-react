import React from "react";

const UserLogIn = props => {
  return (
    <li className="nav-item">
      <a onClick={props.logOut} className="nav-link btn btn-danger">
        Cerrar Sesion
      </a>
    </li>
  );
};

export default UserLogIn;
