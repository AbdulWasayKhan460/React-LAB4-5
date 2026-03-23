import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Students from "./Components/Students";
import AddStudent from "./Components/Addstudent";
import Faculty from "./components/facult";
function App() {
  const [students, setStudents] = useState([])
  const [faculty] = useState([
    { id: 1, name: "Dr. Ahmed Raza", course: "Data Structures" },
    { id: 2, name: "Prof. Sana Iqbal", course: "Operating Systems" },
    { id: 3, name: "Dr. Kamran Ali", course: "Software Engineering" },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  return (
    <>
      <nav className="navbar">
        <h2>NEDUET Portal</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/add">Add Student</Link>
          <Link to="/faculty">Faculty</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students students={students} />} />
        <Route path="/add" element={<AddStudent addStudent={addStudent} />} />
        <Route path="/faculty" element={<Faculty faculty={faculty} />} />
      </Routes>
    </>
  );
}
export default App;
