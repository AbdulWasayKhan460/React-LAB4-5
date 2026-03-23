import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    dept: "",
    cgpa: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form);
    navigate("/students");
  };
  return (
    <div className="form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          required
          onChange={(e) => setForm({ ...form, dept: e.target.value })}
        />
        <input
          type="text"
          placeholder="CGPA"
          required
          onChange={(e) => setForm({ ...form, cgpa: e.target.value })}
        />
        <button>Add Student</button>
      </form>
    </div>
  );
}
export default AddStudent;