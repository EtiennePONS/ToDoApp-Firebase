import "./App.css";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";

function App() {
  return (
    <div className="App">
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/ToDoApp-Firebase" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
