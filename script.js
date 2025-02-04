const questions=[
    {
        question:"In 2024 , Which team has won the ICC T20 World cup?",
        options:["India","Australia","South Africa","New Zealand"],
        answer:"India"
    },
    {
        question:"What is the capital city of New zealand?",
        options:["Wellington","Auckland","Canberra","Sydney"],
        answer:"Wellington"
    },
    {
        question:"What is the Largest Ocean on the Earth?",
        options:["Atlantic Ocean","Arctic Ocean","Indian Ocean","Pacific Ocean"],
        answer:"Pacific Ocean"
    },
    {
        question:"Who is the current Prime Minister of India?",
        options:["Narendra Modi","Vikas Mandal","Rahul Gandhi","Alok Pandey"],
        answer:"Narendra Modi"
    },{
        question:"Who is the current Prime Minister of Australia?",
        options:["Jack McLaren","Michael Carrick","Gordon Brown","Australia's Prime Minister"],
        answer:"Michael Carrick"
    }



];

let currentQuestionIndex=0;

let score = 0;

function loadQuestion(){

    const card= document.getElementById('card');
    card.innerHTML ='';

    const currentQuestion= questions[currentQuestionIndex];
    const questionElement=document.createElement('h2');
    questionElement.classList.add('question');
    questionElement.textContent=currentQuestion.question;
    card.appendChild(questionElement);

    currentQuestion.options.forEach( option=>{
        const optionElement=document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML=`
        <input type="radio" id="${option}" name="option" value="${option}">
        <label for="${option}">${option}</label>
        `;
        card.appendChild(optionElement);
    });
}


document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex<questions.length) {
            loadQuestion();
        }
        else {
            showResult();
        }
    } else {
        alert('Please select an answer.');
    }  
});

function showResult(){
    const result=document.getElementById('result');
    result.innerHTML=`
    <h2>Your final score is ${score}/${questions.length}</h2>
    <button onclick="location.reload()">Play again</button>
    `;
}

loadQuestion();