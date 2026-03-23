import { useState } from "react";
function Converter(){
const [value,setValue] = useState("");
const [mode,setMode] = useState("CtoF");
const [history,setHistory] = useState([]);
function convert(){
let result;
if(mode==="CtoF"){
result = (value * 9/5) + 32;
setHistory([...history,`${value}°C → ${result.toFixed(2)}°F`])
}
else{
result = (value - 32) * 5/9;
setHistory([...history,`${value}°F → ${result.toFixed(2)}°C`])
}
}
function flip(){
setMode(mode==="CtoF" ? "FtoC" : "CtoF");
}
return(
<div className="converter">
<div className="input-box">
<input
type="number"
placeholder="Enter temperature"
value={value}
onChange={(e)=>setValue(e.target.value)}
/>
<button className="flip-btn" onClick={flip}>⇄</button>
<button className="convert-btn" onClick={convert}>Convert</button>
</div>
<p className="mode">
{mode==="CtoF" ? "Celsius → Fahrenheit" : "Fahrenheit → Celsius"}
</p>
<div className="history">
<h3>History</h3>
<ul>
{history.map((item,index)=>(<li key={index}>{item}</li>))}
</ul>
</div>
</div>
);
}
export default Converter;