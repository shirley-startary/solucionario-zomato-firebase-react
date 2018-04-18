import React from "react";
import { Link } from "react-router-dom";

const UserLogIn = props => {
  return (
    <span>
      <li className="nav-item">
        <a onClick={props.logOut} className="nav-link btn btn-danger">
          Cerrar Sesion
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/book">
          Libro Visitas
        </Link>
      </li>
    </span>
  );
};

export default UserLogIn;
