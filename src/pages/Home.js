import Title from "../components/Title";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
import {
  onSnapshot,
  collection,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import React, { useState } from "react";

function Home() {
  const [notes, setNotes] = useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let notesArray = [];
      querySnapshot.forEach((doc) => {
        notesArray.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notesArray);
    });
    return () => unsub();
  }, []);
  const handleEdit = async (note, description) => {
    await updateDoc(doc(db, "notes", note.id), { description: description });
  };
  const toggleComplete = async (note) => {
    await updateDoc(doc(db, "notes", note.id), {
      completed: !note.completed,
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">Hi, Sign Up or Sign In</h1>
      <div>
        <Title />
      </div>
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
export default Home;
