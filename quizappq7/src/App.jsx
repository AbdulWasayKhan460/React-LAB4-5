import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

function App() {

const quiz = [
{question:"3 + 2 = ?",options:["4","5","6"],correct:"5"},
{question:"4 / 2 = ?",options:["1","8","2"],correct:"2"},
{question:"5 - 3 = ?",options:["0","2","1"],correct:"2"},
{question:"Capital of Pakistan?",options:["Karachi","Islamabad","Lahore"],correct:"Islamabad"},
{question:"React uses which language?",options:["Python","JavaScript","C++"],correct:"JavaScript"}
];

const [answers,setAnswers] = useState([]);

return (

<Routes>

<Route
path="/"
element={<QuestionCard quiz={quiz} index={0} answers={answers} setAnswers={setAnswers}/>}
/>

<Route
path="/question/:id"
element={<QuestionCard quiz={quiz} answers={answers} setAnswers={setAnswers}/>}
/>

<Route
path="/result"
element={<Result quiz={quiz} answers={answers}/>}
/>

</Routes>

);
}

export default App;