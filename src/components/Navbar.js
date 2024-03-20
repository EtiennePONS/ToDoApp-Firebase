import "./Navbar.css";
import { LuListTodo } from "react-icons/lu";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";

function Navbar() {
  const { toggleModals } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/ToDoApp-Firebase");
    } catch {
      alert(
        "For some reasons, we can't deconnect, please check your internet connexion and retry"
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <LuListTodo className="LuListTodo" />

      <button
        onClick={() => {
          toggleModals("signUp");
        }}
        className="btn btn-turquoise"
      >
        Inscription
      </button>
      <button
        onClick={() => {
          toggleModals("signIn");
        }}
        className="btn btn-turquoise ms-2"
      >
        Connexion
      </button>
      <button
        onClick={() => {
          toggleModals("close");
          logOut();
        }}
        className="btn btn-rouge ms-2"
      >
        Quitter
      </button>
    </nav>
  );
}
export default Navbar;
