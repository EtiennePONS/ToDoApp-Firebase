import AddTodo from "../../../components/AddTodo";
import Todos from "../../../components/Todos";
import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { db } from "../../../firebase-config";
import {
  where,
  onSnapshot,
  collection,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function PrivateHome() {
  const context = useContext(UserContext);
  const user = context.currentUser.uid;

  const [notes, setNotes] = useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "notes"), where("utilisateur", "==", user));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let notesArray = [];

      querySnapshot.forEach((doc) => {
        notesArray.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setNotes(notesArray);
    });
    return () => unsub();
  });

  const toggleComplete = async (note) => {
    await updateDoc(doc(db, "notes", note.id), {
      completed: !note.completed,
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };
  const handleEdit = async (note, description) => {
    await updateDoc(doc(db, "notes", note.id), { description: description });
  };

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">Bienvenue</h1>
      <div>
        <AddTodo />
      </div>
      <div>
        {notes.map((note) => (
          <Todos
            key={note.id}
            note={note}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default PrivateHome;
