import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  const { currentUser } = useContext(UserContext);
  const user = currentUser.uid;
  console.log(user);

  if (!currentUser) {
    <Navigate to="/ToDoApp-Firebase" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
