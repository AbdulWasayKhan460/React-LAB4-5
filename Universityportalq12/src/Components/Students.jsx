import StudentCard from "./Studentcard.jsx";
function Students({ students }) {
  return (
    <div className="students">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.dept}</td>
              <td>{s.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card-container">
        {students.map((s) => (
          <StudentCard key={s.id} student={s} />
        ))}
      </div>
    </div>
  );
}
export default Students;