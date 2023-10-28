const quizData = [{
    Question: "Which language is widely used?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C",
    correct: "a",
},
{
    Question: "CSS stands for?",
    a: "Hyper Text Markup Language",
    b: "Central Processing Unit",
    c: "Cascading Style Sheet",
    d: "Random Access Memory",
    correct: "c",
},

{
      Question: "Father of Python?",
    a: "quido van russem",
    b: "Nischal",
    c: "Kartik",
    d: "Kailash",
    correct: "a",
},
]
let index = 0;
let correct = 0;
let incorrect = 0;  
let total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input");

const loadQuestion = () => {
     
    if (index === total) {
        return endQuiz();
    }
    const data=quizData[index]
    questionBox.innerHTML = data.Question;
    allInputs[0].nextElementSibling.innerHTML = data.a;
    allInputs[1].nextElementSibling.innerHTML = data.b;
    allInputs[2].nextElementSibling.innerHTML = data.c;
    allInputs[3].nextElementSibling.innerHTML = data.d;

}
const submitQuiz = () => {
    const data=quizData[index]
    const ans = getAnswer();
    if (ans == data.correct) {
        correct++;
       
    }
    else {
        incorrect++;

    }
    index++;
    loadQuestion()


}
const getAnswer = () => {
    let answer;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }

        }


    ); return answer;

}
const endQuiz=()=>{
    document.querySelector(".container").innerHTML=`<h3>Thank you for playing the quiz</h3>
    <h2>${correct}/${total}are correct</h2>`
}
loadQuestion();
