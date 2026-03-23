import "../App.css";
import { useState } from "react";

function UserForm({ addUser }) {

  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      name: "",
      rollno: "",
      email: "",
      password: ""
    });
  };
  return (
  <div className="form-container">
     <h2 style={{ color: "#4a7cff", textAlign: "center", }}>User Registration</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
      <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="CT-23XXX"/>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
      <button type="submit">Register</button>
      </form>
      </div>
  );
}
export default UserForm;