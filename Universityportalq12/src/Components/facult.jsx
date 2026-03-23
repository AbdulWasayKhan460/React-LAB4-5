function Faculty({ faculty }) {
  return (
    <div className="faculty">
      <h2>Our Teaching Faculty</h2>
      <div className="card-container">
        {faculty.map((f) => (
          <div key={f.id} className="card faculty-card">
            <h3>{f.name}</h3>
            <p>Course: {f.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faculty;