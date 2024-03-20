import "./AddTodo.css";
import React, { useContext } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";

function AddTodo() {
  const [description, setDescription] = React.useState("");
  const user = useContext(UserContext);
  console.log(user.currentUser.uid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description !== "") {
      await addDoc(collection(db, "notes"), {
        description,
        completed: false,
        utilisateur: user.currentUser.uid,
      });
      setDescription("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="Addtodo">
      <input
        type="text"
        placeholder=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="btn btnAdd">Ajouter</button>
    </form>
  );
}
export default AddTodo;
