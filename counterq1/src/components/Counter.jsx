function Counter({ count, increase, decrease, reset }) { return (
    <div
          style={{
            background: "#f9f9f9",
            padding: "25px",
            borderRadius: "15px",
            width: "300px",
            margin: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={decrease}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                background: "#ff4d4d",
                color: "white",
              }}
            >
              −
            </button>

            <div style={{ fontSize: "28px", fontWeight: "bold" }}>{count}</div>

            <button
              onClick={increase}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                background: "#4CAF50",
                color: "white",
              }}
            >
              +
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={reset}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#333",
              color: "white",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      );
    }
export default Counter;