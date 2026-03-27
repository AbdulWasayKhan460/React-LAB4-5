import { useState } from "react";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {

      const students = [
      { id:1, studentid:101, name:"Ahmed", subject:"Math", marks:85 },
      { id:2, studentid:102, name:"Ali", subject:"Physics", marks:72 },
      { id:3, studentid:103, name:"Sara", subject:"Chemistry", marks:90 },
      { id:4, studentid:104, name:"Hassan", subject:"Math", marks:60 },
      { id:5, studentid:105, name:"Ayesha", subject:"Physics", marks:95 },
      { id:6, studentid:106, name:"Usman", subject:"Chemistry", marks:55 },
      { id:7, studentid:107, name:"Fatima", subject:"Math", marks:78 },
      { id:8, studentid:108, name:"Bilal", subject:"Physics", marks:88 }
      ];

      const [sortOrder,setSortOrder] = useState("none");
      const [filterMarks,setFilterMarks] = useState(0);

      let filteredStudents = students.filter(
      (student)=> student.marks >= filterMarks
      );

      if(sortOrder==="high"){
      filteredStudents.sort((a,b)=> b.marks - a.marks);
      }
      else if(sortOrder==="low"){
      filteredStudents.sort((a,b)=> a.marks - b.marks);
      }

      return (
          <div className="container">

            <h1 style={{color:"cyan"}}>Student Marks Table</h1>

          <div className="controls">

            <select onChange={(e)=>setSortOrder(e.target.value)}>
            <option value="none" style={{textAlign:"center"}}>Sort</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
            </select>

            <div className="slider-box">
            <label>Filter Marks: {filterMarks}+</label>
            <input
            type="range"
            min="0"
            max="100"
            value={filterMarks}
            onChange={(e)=>setFilterMarks(e.target.value)}
            />
      </div>
      </div>
      <StudentTable students={filteredStudents}/>
      </div>
);
}
export default App;
