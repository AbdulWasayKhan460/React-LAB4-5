import { useParams, useNavigate } from "react-router-dom";

function QuestionCard({quiz,answers,setAnswers}){

const {id} = useParams();
const navigate = useNavigate();

const index = id ? parseInt(id) : 0;
const q = quiz[index];

const progress = ((index+1)/quiz.length)*100;

const selectAnswer=(option)=>{
let newAns=[...answers];
newAns[index]=option;
setAnswers(newAns);
};

const next=()=>{
if(index<quiz.length-1){
navigate(`/question/${index+1}`);
}else{
navigate("/result");
}
};

const prev=()=>{
if(index>0){
navigate(`/question/${index-1}`);
}
};

return(

<div className="quiz-container">

<div className="card">

<div className="progress-bar">
<div className="progress" style={{width:`${progress}%`}}></div>
</div>

<h3>{index+1}/{quiz.length}</h3>

<h2>{q.question}</h2>

<div className="options">

{q.options.map((op,i)=>(
    <button
key={i}
    className={answers[index]===op?"selected":""}
    onClick={()=>selectAnswer(op)}>{op}</button>
    ))}
</div>
<div className="nav">
<button onClick={prev} disabled={index===0}>
Prev
</button>
<button onClick={next}>{index===quiz.length-1 ? "Submit":"Next"}</button>

</div>
</div>
</div>
);
}


export default QuestionCard;