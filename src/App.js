import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <div className="App">
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/ToDoApp-Firebase" element={<Home />}></Route>
        <Route path="/ToDoApp-Firebase/private" element={<Private />}>
          <Route
            path="/ToDoApp-Firebase/private/private-home"
            element={<PrivateHome />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
