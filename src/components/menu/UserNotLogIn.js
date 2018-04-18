import React from "react";

const UserNotLogIn = props => {
  return (
    <li className="nav-item">
      <a
        onClick={() => {
          props.logIn();
        }}
        className="nav-link btn btn-success"
      >
        Inicia Sesión
      </a>
    </li>
  );
};

export default UserNotLogIn;
