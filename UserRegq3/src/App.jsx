import { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="app-container">
      <UserForm addUser={addUser} />
      <h2 className="title">Registered Users</h2>
      <div className="card-container">
        {users.map((user, index) => (<UserCard
            key={index}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}
export default App;