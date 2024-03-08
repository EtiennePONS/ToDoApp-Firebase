import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";

function Todos({ note, toggleComplete, handleDelete, handleEdit }) {
  const [newDescription, setNewDescription] = React.useState(note.description);
  const HandleEdit = (e) => {
    e.preventDefault();
    if (note.completed === true) {
      setNewDescription(note.description);
    } else {
      note.description = "";
      setNewDescription(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: note.completed && "line-through" }}
        type="text"
        value={note.description === "" ? newDescription : note.description}
        className="list"
        onChange={HandleEdit}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(note)}
        >
          <ImCheckboxChecked />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(note, newDescription)}
        >
          <MdChangeCircle />
        </button>
        <button className="button-delete" onClick={() => handleDelete(note.id)}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}
export default Todos;
