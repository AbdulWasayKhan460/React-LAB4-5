import { useState } from "react";
import Counter from "./components/Counter";
import History from "./components/History";;
function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const increase = () => {
    const newValue = count + 1;
    setCount(newValue);
    setHistory([...history, `+1 → ${newValue}`]);
  };
  const decrease = () => {
    const newValue = count - 1;
    setCount(newValue);
    setHistory([...history, `-1 → ${newValue}`]);
  };
  const reset = () => {setCount(0);setHistory(["Reset → 0"]);};

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "20px" }}>Counter App</h1>
      <Counter
        count={count}
        increase={increase}
        decrease={decrease}
        reset={reset}
      />
      <History history={history} />
    </div>
  );
}

export default App;
