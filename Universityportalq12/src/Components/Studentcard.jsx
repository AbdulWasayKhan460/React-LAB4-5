function StudentCard({ student }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Dept: {student.dept}</p>
      <p>CGPA: {student.cgpa}</p>
    </div>
  );
}

export default StudentCard;