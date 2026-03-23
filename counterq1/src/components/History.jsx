function History({ history }) {
  return (
    <div style={{
        marginTop: "30px",
        background: "#ffffff",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        marginInline: "auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}>
      <h3 style={{ marginBottom: "10px" }}>History</h3>
           <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        {history.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "5px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default History;
