function Result({quiz,answers}){
    let score=0;
    quiz.forEach((q,i)=>{
        if(answers[i]===q.correct){
        score++;
    }});
return(
<div className="quiz-container">
<div className="card">
    <h2>Quiz Completed!</h2>
    <h1>{score} / {quiz.length}</h1>
    <p>You Scored</p>
</div>
</div>
);
}
export default Result;