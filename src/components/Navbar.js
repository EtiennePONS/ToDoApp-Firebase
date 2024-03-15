import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

function Navbar() {
  const { toggleModals } = useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>
      <div>
        <button
          onClick={() => {
            toggleModals("signUp");
          }}
          className="btn btn-turquoise"
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            toggleModals("signIn");
          }}
          className="btn btn-turquoise ms-2"
        >
          Sign In
        </button>
        <button className="btn btn-rouge ms-2">Log Out</button>
      </div>
    </nav>
  );
}
export default Navbar;
