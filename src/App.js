import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import {
  onSnapshot,
  collection,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
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
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
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

export default App;
