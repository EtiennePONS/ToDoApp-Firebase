import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddTodo() {
  const [description, setDescription] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description !== "") {
      await addDoc(collection(db, "notes"), {
        description,
        completed: false,
      });
      setDescription("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
export default AddTodo;
